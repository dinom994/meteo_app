import { useLocation } from "react-router-dom";
import classes from "./CityDetailsTab.module.css";
import { useState, useEffect, useCallback } from "react";
import HourlyVariablesTab from "./HourlyVariablesTab";
import DailyVariablesTab from "./DailyVariablesTab";
import GraphTab from "./GraphTab";

const CityDetailsTab = () => {
  const location = useLocation();
  const requestedCity = location.state;
  const [selectedView, setSelectedView] = useState("");
  const [checkedHourlyVariables, setCheckedHourlyVariables] = useState([]);
  const [checkedDailyVariables, setCheckedDailyVariables] = useState([]);

  const handleHourlyDataChange = (hourlyData) => {
    setCheckedHourlyVariables(hourlyData);
  };

  const handleDailyDataChange = (dailyData) => {
    setCheckedDailyVariables(dailyData);
  };

  useEffect(() => {
    setSelectedView("");
    setCheckedHourlyVariables([]);
    setCheckedDailyVariables([]);
  }, [requestedCity]);

  return (
    <div className={classes.details}>
      <h2> Meteorological data for {requestedCity.city} </h2>
      <select
        value={selectedView}
        onChange={(event) => {
          setSelectedView(event.target.value);
        }}
      >
        <option value="" key="default">
          Choose your view
        </option>
        <option key="hourly" value="hourlyView">
          Hourly View
        </option>
        <option key="daily" value="dailyView">
          Daily View
        </option>
      </select>
      {selectedView === "hourlyView" && (
        <HourlyVariablesTab
          onHourlyDataChange={handleHourlyDataChange}
          checkedVars={checkedHourlyVariables}
        />
      )}
      {selectedView === "dailyView" && (
        <DailyVariablesTab
          onDailyDataChange={handleDailyDataChange}
          checkedVars={checkedDailyVariables}
        />
      )}
      {selectedView !== "" && (
        <GraphTab
          hourlyData={checkedHourlyVariables}
          dailyData={checkedDailyVariables}
          location={requestedCity}
        />
      )}
    </div>
  );
};

export default CityDetailsTab;
