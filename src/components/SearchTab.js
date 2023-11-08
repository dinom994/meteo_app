import classes from "./SearchTab.module.css";
import { useEffect, useState } from "react";
import MagnifierIcon from "../ui/MagnifierIcon";
import CitiesDropdownMenu from "./CitiesDropdownMenu";
import { useNavigate } from "react-router-dom";

const SearchTab = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const inputChangeHandler = (event) => {
    setQuery(event.target.value);
  };

  const navigateToSettingsPageHandler = () => {
    navigate("/settings");
  };
  
  return (
    <div className={classes.searchTab}>
      <h2> Meteo App </h2>
      <div className={classes.settingsButton}>
        <button onClick={navigateToSettingsPageHandler}>Settings</button>
      </div>
      <div className={classes.searchBox}>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Search"
          value={query}
          onChange={inputChangeHandler}
          className={classes.searchBoxInput}
        />
        <div className={classes.searchBoxIcon}>
          <MagnifierIcon />
        </div>
      </div>
      {query.trim().length > 0 && <CitiesDropdownMenu title={query} />}
    </div>
  );
};

export default SearchTab;
