import { useReducer } from "react";
import SettingsContext from "./settings-context";

const defaultSettingsState = {
  temperature: "celsius",
  windSpeed: "kmh",
  precipitation: "mm",
  timeZone: "GMT",
  pastDays: "0",
};

const settingsReducer = (state, action) => {
  if (action.type === "SETTEMPERATURE")
    return {
      ...state,
      temperature: action.tempValue,
    };

  if (action.type === "SETWINDSPEED")
    return {
      ...state,
      windSpeed: action.windSpeedValue,
    };

  if (action.type === "SETPRECIPITATION")
    return {
      ...state,
      precipitation: action.precipitationValue,
    };

  if (action.type === "SETTIMEZONE")
    return {
      ...state,
      timeZone: action.timeZone,
    };

  if (action.type === "SETPASTDAYS")
    return {
      ...state,
      pastDays: action.pastDaysValue,
    };

  if (action.type === "REVERTTODEFAULT") return defaultSettingsState;

  return state;
};

const SettingsProvider = (props) => {
  const [settingsState, dispatchSettingsAction] = useReducer(
    settingsReducer,
    defaultSettingsState
  );

  const setTemperatureHandler = (tempValue) => {
    dispatchSettingsAction({ type: "SETTEMPERATURE", tempValue });
  };

  const setWindSpeedHandler = (windSpeedValue) => {
    dispatchSettingsAction({ type: "SETWINDSPEED", windSpeedValue });
  };

  const setPrecipitationHandler = (precipitationValue) => {
    dispatchSettingsAction({ type: "SETPRECIPITATION", precipitationValue });
  };

  const setTimeZoneHandler = (timeZone) => {
    dispatchSettingsAction({ type: "SETTIMEZONE", timeZone });
  };

  const setPastDaysHandler = (pastDaysValue) => {
    dispatchSettingsAction({ type: "SETPASTDAYS", pastDaysValue });
  };

  const revertToDefaultHandler = () => {
    dispatchSettingsAction({ type: "REVERTTODEFAULT" });
  };

  const settingsContext = {
    temperature: settingsState.temperature,
    windSpeed: settingsState.windSpeed,
    precipitation: settingsState.precipitation,
    timeZone: settingsState.timeZone,
    pastDays: settingsState.pastDays,
    setTemperature: setTemperatureHandler,
    setWindSpeed: setWindSpeedHandler,
    setPrecipitation: setPrecipitationHandler,
    setTimeZone: setTimeZoneHandler,
    setPastDays: setPastDaysHandler,
    revertToDefault: revertToDefaultHandler,
  };

  return (
    <SettingsContext.Provider value={settingsContext}>
      {props.children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
