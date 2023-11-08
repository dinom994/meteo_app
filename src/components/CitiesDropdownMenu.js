import classes from "./CitiesDropdownMenu.module.css";
import citiesData from "../data/gradovi.json";
import { useContext, useEffect, useState } from "react";
import StarIcon from "../ui/StarIcon";
import StarIconClicked from "../ui/StarIconClicked";
import FavouritesContext from "../store/favourites-context";
import { useNavigate } from "react-router-dom";

const CitiesDropdownMenu = (props) => {
  const [cities, setCities] = useState([]);
  const favouritesCtx = useContext(FavouritesContext);
  const navigate = useNavigate();

  useEffect(() => {
    setCities(citiesData);
  }, []);

  const filteredCities = cities
    .filter((obj) => {
      return (
        obj.city.slice(0, props.title.length).toLowerCase() ===
        props.title.toLowerCase()
      );
    })
    .slice(0, 5);

  const addToFavouritesHandler = (city) => {
    favouritesCtx.addToFavourites(city);
  };

  const removeFromFavouritesHandler = (city) => {
    favouritesCtx.removeFromFavourites(city);
  };

  const moveToDetailsPageHandler = (data) => {
    navigate("/details", {state: data});
  };
  
  return (
    <div className={classes.citiesBar}>
      {filteredCities.map((obj) => (
        <div className={classes.cityBar}>
          <div className={classes.cityBarTitle}>
            <button onClick={() => moveToDetailsPageHandler(obj)}>{obj.city}</button>
          </div>
          <div className={classes.cityBarStarIcon}>
            {favouritesCtx.favouriteCities.includes(obj) ? (
              <button onClick={() => removeFromFavouritesHandler(obj)}>
                <StarIconClicked />
              </button>
            ) : (
              <button onClick={() => addToFavouritesHandler(obj)}>
                <StarIcon />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CitiesDropdownMenu;
