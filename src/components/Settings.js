import { useContext, useState } from "react";
import classes from "./Settings.module.css";
import timeZones from "../data/timeZones.json";
import pastDays from "../data/pastDays.json";
import FavouritesContext from "../store/favourites-context";
import SettingsContext from "../store/settings-context";

const Settings = () => {
  const favouritesCtx = useContext(FavouritesContext);
  const settingsCtx = useContext(SettingsContext);

  const temperatureChangeHandler = (event) => {
    settingsCtx.setTemperature(event.target.value);
  };

  const windSpeedChangeHandler = (event) => {
    settingsCtx.setWindSpeed(event.target.value);
  };

  const precipitationChangeHandler = (event) => {
    settingsCtx.setPrecipitation(event.target.value);
  };

  const timeZoneChangeHandler = (event) => {
    settingsCtx.setTimeZone(event.target.value);
  };
  const pastDaysChangeHandler = (event) => {
    settingsCtx.setPastDays(event.target.value);
  };
  const revertSettingsHandler = () => {
    settingsCtx.revertToDefault();
  };
  const deleteFavouritesHandler = () => {
    favouritesCtx.removeAllFromFavourites();
  };

  return (
    <div className={classes.settingsTab}>
      <h1>APPLICATION SETTINGS</h1>
      <h2>Temperature unit</h2>
      <div className={classes.radioButtons}>
        <input
          type="radio"
          id="celsius"
          name="temperature"
          value="celsius"
          checked={settingsCtx.temperature === "celsius"}
          onChange={temperatureChangeHandler}
        />
        <label htmlFor="celsius">Celsius °C</label>
        <input
          type="radio"
          id="fahrenheit"
          name="temperature"
          value="fahrenheit"
          checked={settingsCtx.temperature === "fahrenheit"}
          onChange={temperatureChangeHandler}
        />
        <label htmlFor="fahrenheit">Fahrenheit °F</label>
      </div>
      <h2>Wind speed unit</h2>
      <div className={classes.radioButtons}>
        <input
          type="radio"
          id="km/h"
          name="windspeed_unit"
          value="kmh"
          checked={settingsCtx.windSpeed === "kmh"}
          onChange={windSpeedChangeHandler}
        />
        <label htmlFor="km/h">km/h</label>
        <input
          type="radio"
          id="m/s"
          name="windspeed_unit"
          value="ms"
          checked={settingsCtx.windSpeed === "ms"}
          onChange={windSpeedChangeHandler}
        />
        <label htmlFor="m/s">m/s</label>
        <input
          type="radio"
          id="mph"
          name="windspeed_unit"
          value="mph"
          checked={settingsCtx.windSpeed === "mph"}
          onChange={windSpeedChangeHandler}
        />
        <label htmlFor="mph">mph</label>
        <input
          type="radio"
          id="kn"
          name="windspeed_unit"
          value="kn"
          checked={settingsCtx.windSpeed === "kn"}
          onChange={windSpeedChangeHandler}
        />
        <label htmlFor="kn">kn</label>
      </div>
      <h2>Precipitation unit</h2>
      <div className={classes.radioButtons}>
        <input
          type="radio"
          id="milimeter"
          name="precipitation_unit"
          value="mm"
          checked={settingsCtx.precipitation === "mm"}
          onChange={precipitationChangeHandler}
        />
        <label htmlFor="milimeter">Milimeter</label>
        <input
          type="radio"
          id="inch"
          name="precipitation_unit"
          value="inch"
          checked={settingsCtx.precipitation === "inch"}
          onChange={precipitationChangeHandler}
        />
        <label htmlFor="inch">Inch</label>
      </div>
      <h2>Timezone</h2>
      <div>
        <select
          name="timeZones"
          value={settingsCtx.timeZone}
          onChange={timeZoneChangeHandler}
        >
          {timeZones.map((zone) => {
            return (
              <option key={zone.label} value={zone.value}>
                {zone.label}
              </option>
            );
          })}
        </select>
      </div>
      <h2>Past days</h2>
      <select
        name="pastDays"
        value={settingsCtx.pastDays}
        onChange={pastDaysChangeHandler}
      >
        {pastDays.map((days) => {
          return (
            <option key={days.label} value={days.value}>
              {" "}
              {days.label}
            </option>
          );
        })}
      </select>
      <div className={classes.applicationSettingsButton}>
        <button onClick={revertSettingsHandler}>
          Revert settings to default
        </button>
        <button onClick={deleteFavouritesHandler}>Delete Favourites</button>
      </div>
    </div>
  );
};

export default Settings;
