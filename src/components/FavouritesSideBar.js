import classes from "./FavouritesSideBar.module.css";
import FavouritesContext from "../store/favourites-context";
import { useContext } from "react";
import TrashIcon from "../ui/TrashIcon";
import { useNavigate } from "react-router-dom";

const FavouritesSideBar = () => {
  const favouritesCtx = useContext(FavouritesContext);
  const navigate = useNavigate();

  const removeFromFavouritesHandler = (city) => {
    favouritesCtx.removeFromFavourites(city);
  };

  const sortByAscendingOrderHandler = () => {
    favouritesCtx.sortByAscendingOrder();
  };

  const sortByDescendingOrderHandler = () => {
    favouritesCtx.sortByDescendingOrder();
  };

  const moveToDetailsPageHandler = (data) => {
    navigate("/details", {state: data});
  };

  return (
    <div className={classes.sidebar}>
      <h2>Favourites</h2>

      <div>
        {favouritesCtx.favouriteCities.length === 0 && (
          <p>You didn't add any favourite cities!</p>
        )}
        {favouritesCtx.favouriteCities.length > 0 && (
          <>
            <div>
              {favouritesCtx.favouriteCities.map((city) => (
                <div className={classes.cities}>
                  <button onClick={() => moveToDetailsPageHandler(city)}>{city.city}</button>
                  <button onClick={() => removeFromFavouritesHandler(city)}>
                    <TrashIcon />
                  </button>
                </div>
              ))}
            </div>
            <div className={classes.sortButtons}>
              <button onClick={sortByAscendingOrderHandler}>
                Sort by ascending order
              </button>
              <button onClick={sortByDescendingOrderHandler}>
                Sort by descending order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FavouritesSideBar;
