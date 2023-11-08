import React from "react";

const SettingsContext = React.createContext({
  temperature: "",
  windSpeed: "",
  precipitation: "",
  timeZone: "",
  pastDays: "",
  setTemperature: (tempValue) => {},
  setWindSpeed: (windSpeedValue) => {},
  setPrecipitation: (precipitationValue) => {},
  setTimeZone: (timeZone) => {},
  setPastDays: (pastDaysValue) => {},
  revertToDefault: () => {},
});

export default SettingsContext;
