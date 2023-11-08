import classes from "./HourlyVariablesTab.module.css";
import { useEffect, useState } from "react";

const HourlyVariablesTab = (props) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState(props.checkedVars);

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
    props.onHourlyDataChange(selectedCheckboxes);
  }, [selectedCheckboxes]);

  return (
    <>
      <h3>Hourly weather variables</h3>
      <div className={classes.variables}>
        <span>
          <input
            type="checkbox"
            id="temperature_2m"
            onChange={handleCheckBoxChange}
            checked={selectedCheckboxes.includes("temperature_2m")}
          />
          <label htmlFor="temperature_2m">Temperature (2m)</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="cloudcover"
            onChange={handleCheckBoxChange}
            checked={selectedCheckboxes.includes("cloudcover")}
          />
          <label htmlFor="cloudcover">Cloudcover Total</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="windspeed_10m"
            onChange={handleCheckBoxChange}
            checked={selectedCheckboxes.includes("windspeed_10m")}
          />
          <label htmlFor="windspeed_10m">Wind Speed (10m)</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="soil_temperature_0cm"
            onChange={handleCheckBoxChange}
            checked={selectedCheckboxes.includes("soil_temperature_0cm")}
          />
          <label htmlFor="soil_temperature_0cm">Soil Temperature (0cm)</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="relativehumidity_2m"
            onChange={handleCheckBoxChange}
            checked={selectedCheckboxes.includes("relativehumidity_2m")}
          />
          <label htmlFor="relativehumidity_2m">Relative Humidity (2m)</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="cloudcover_low"
            onChange={handleCheckBoxChange}
            checked={selectedCheckboxes.includes("cloudcover_low")}
          />
          <label htmlFor="cloudcover_low">Cloudcover Low</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="windspeed_80m"
            onChange={handleCheckBoxChange}
            checked={selectedCheckboxes.includes("windspeed_80m")}
          />
          <label htmlFor="windspeed_80m">Wind Speed (80m)</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="soil_temperature_6cm"
            onChange={handleCheckBoxChange}
            checked={selectedCheckboxes.includes("soil_temperature_6cm")}
          />
          <label htmlFor="soil_temperature_6cm">Soil Temperature (6cm)</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="dewpoint_2m"
            onChange={handleCheckBoxChange}
            checked={selectedCheckboxes.includes("dewpoint_2m")}
          />
          <label htmlFor="dewpoint_2m">Dew Point (2m)</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="cloudcover_mid"
            onChange={handleCheckBoxChange}
            checked={selectedCheckboxes.includes("cloudcover_mid")}
          />
          <label htmlFor="cloudcover_mid">Cloudcover Mid</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="windspeed_120m"
            onChange={handleCheckBoxChange}
            checked={selectedCheckboxes.includes("windspeed_120m")}
          />
          <label htmlFor="windspeed_120m">Wind Speed (120m)</label>
        </span>
        <span>
          <input
            type="checkbox"
            id="soil_temperature_18cm"
            onChange={handleCheckBoxChange}
            checked={selectedCheckboxes.includes("soil_temperature_18cm")}
          />
          <label htmlFor="soil_temperature_18cm">Soil Temperature (18cm)</label>
        </span>
      </div>
    </>
  );
};

export default HourlyVariablesTab;
