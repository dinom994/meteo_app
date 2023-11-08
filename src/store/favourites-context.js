import React from "react";

const FavouritesContext = React.createContext({
    favouriteCities: [],
    addToFavourites: (city) => {},
    removeFromFavourites: (city) => {},
    removeAllFromFavourites: () => {},
    sortByAscendingOrder: () => {},
    sortByDescendingOrder: () => {}
});

export default FavouritesContext;