import { useReducer } from "react";
import FavouritesContext from "./favourites-context";

const defaultFavouritesState = {
  favouriteCities: [],
};

const favouritesReducer = (state, action) => {
  if (action.type === "ADDTOFAVOURITES") {
    return {
      favouriteCities: [...state.favouriteCities, action.city],
    };
  }

  if (action.type === "REMOVEFROMFAVOURITES") {
    return {
      favouriteCities: state.favouriteCities.filter(
        (city) => city !== action.city
      ),
    };
  }

  if (action.type === "REMOVEALLFROMFAVOURITES") {
    return defaultFavouritesState;
  }

  if (action.type === "SORTBYASCENDINGORDER") {
    return {
      favouriteCities: state.favouriteCities.sort((a, b) => {
        const cityA = a.city.toUpperCase(); // Pretvaranje u velika slova radi pouzdanog poređenja
        const cityB = b.city.toUpperCase();

        if (cityA < cityB) {
          return -1; // a treba biti ispred b
        }
        if (cityA > cityB) {
          return 1; // b treba biti ispred a
        }
        return 0; // a i b su jednaki
      }),
    };
  }

  if (action.type === "SORTBYDESCENDINGORDER") {
    return {
      favouriteCities: state.favouriteCities.sort((a, b) => {
        const cityA = a.city.toUpperCase(); // Pretvaranje u velika slova radi pouzdanog poređenja
        const cityB = b.city.toUpperCase();

        if (cityA > cityB) {
          return -1; // b treba biti ispred a (inverzno poređenje za opadajući redosled)
        }
        if (cityA < cityB) {
          return 1; // a treba biti ispred b (inverzno poređenje za opadajući redosled)
        }
        return 0; // a i b su jednaki
      }),
    };
  }

  return state;
};

const FavouritesProvider = (props) => {
  const [favouritesState, dispatchFavouritesAction] = useReducer(
    favouritesReducer,
    defaultFavouritesState
  );

  const addToFavouritesHandler = (city) => {
    dispatchFavouritesAction({ type: "ADDTOFAVOURITES", city });
  };

  const removeFromFavouritesHandler = (city) => {
    dispatchFavouritesAction({ type: "REMOVEFROMFAVOURITES", city });
  };

  const removeAllFromFavouritesHandler = () => {
    dispatchFavouritesAction({ type: "REMOVEALLFROMFAVOURITES" });
  };

  const sortByAscendingOrderHandler = () => {
    dispatchFavouritesAction({ type: "SORTBYASCENDINGORDER" });
  };

  const sortByDescendingOrderHandler = () => {
    dispatchFavouritesAction({ type: "SORTBYDESCENDINGORDER" });
  };

  const favouritesContext = {
    favouriteCities: favouritesState.favouriteCities,
    addToFavourites: addToFavouritesHandler,
    removeFromFavourites: removeFromFavouritesHandler,
    removeAllFromFavourites: removeAllFromFavouritesHandler,
    sortByAscendingOrder: sortByAscendingOrderHandler,
    sortByDescendingOrder: sortByDescendingOrderHandler,
  };

  return (
    <FavouritesContext.Provider value={favouritesContext}>
      {props.children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesProvider;
