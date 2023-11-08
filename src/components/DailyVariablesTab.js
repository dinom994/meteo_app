import classes from "./DailyVariablesTab.module.css";
import { useEffect, useState } from "react";

const DailyVariablesTab = (props) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(
    props.checkedVars
  );

  const handleCheckBoxChange = (event) => {
    if (event.target.checked) {
      const newSelectedCheckboxes = [...selectedCheckboxes, event.target.id];
      setSelectedCheckboxes(newSelectedCheckboxes);
    } else {
      const newSelectedCheckboxes = selectedCheckboxes.filter((id) => {
        return id !== event.target.id;
      });
      setSelectedCheckboxes(newSelectedCheckboxes);
    }
  };

  useEffect(() => {
    props.onDailyDataChange(selectedCheckboxes);
  }, [selectedCheckboxes]);

  return (
    <>
      <h3>Daily weather variables</h3>
      <div className={classes.variables}>
        <span>
          <input
            type="checkbox"
            id="weathercode"
            onChange={handleCheckBoxChange}
            checked={selectedCheckboxes.includes("weathercode")}
          />
          <label htmlFor="weathercode">Weathercode (2m)</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="precipitation_sum"
            onChange={handleCheckBoxChange}
            checked={selectedCheckboxes.includes("precipitation_sum")}
          />
          <label htmlFor="precipitation_sum">Precipation Sum</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="temperature_2m_max"
            onChange={handleCheckBoxChange}
            checked={selectedCheckboxes.includes("temperature_2m_max")}
          />
          <label htmlFor="temperature_2m_max">Maximum Temperature (2m)</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="precipitation_hours"
            onChange={handleCheckBoxChange}
            checked={selectedCheckboxes.includes("precipitation_hours")}
          />
          <label htmlFor="precipitation_hours">Precipation Hours</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="temperature_2m_min"
            onChange={handleCheckBoxChange}
            checked={selectedCheckboxes.includes("temperature_2m_min")}
          />
          <label htmlFor="temperature_2m_min">Minimum Temperature (2m)</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="windspeed_10m_max"
            onChange={handleCheckBoxChange}
            checked={selectedCheckboxes.includes("windspeed_10m_max")}
          />
          <label htmlFor="windspeed_10m_max">Maximum Wind Speed (10m)</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="apparent_temperature_max"
            onChange={handleCheckBoxChange}
            checked={selectedCheckboxes.includes("apparent_temperature_max")}
          />
          <label htmlFor="apparent_temperature_max">
            Maximum Apparent Temperature (2m)
          </label>
        </span>
        <span>
          <input
            type="checkbox"
            id="windgusts_10m_max"
            onChange={handleCheckBoxChange}
            checked={selectedCheckboxes.includes("windgusts_10m_max")}
          />
          <label htmlFor="windgusts_10m_max">Maximum Wind Gusts (10m)</label>
        </span>
      </div>
    </>
  );
};

export default DailyVariablesTab;
