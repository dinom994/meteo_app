import { useContext } from "react";
import SettingsContext from "../store/settings-context";
const API_URL = "https://api.open-meteo.com/v1/forecast";
import { useState, useEffect } from "react";
import VariablesGraph from "../ui/VariablesGraph";

const GraphTab = (props) => {
  const [hourlyString, setHourlyString] = useState("");
  const [dailyString, setDailyString] = useState("");
  const [fetchedData, setFetchedData] = useState(null);
  const settingsCtx = useContext(SettingsContext);

  var temperatureString, windSpeedString, precipitationString, pastDaysString;

  if (settingsCtx.temperature === "celsius") {
    temperatureString = "";
  } else {
    temperatureString = `&temperature_unit=${settingsCtx.temperature}`;
  }

  if (settingsCtx.windSpeed === "kmh") {
    windSpeedString = "";
  } else {
    windSpeedString = `&windspeed_unit=${settingsCtx.windSpeed}`;
  }

  if (settingsCtx.precipitation === "milimeter") {
    precipitationString = "";
  } else {
    precipitationString = `&precipitation_unit=${settingsCtx.precipitation}`;
  }

  if (settingsCtx.pastDays === "0") {
    pastDaysString = "";
  } else {
    pastDaysString = `&past_days=${settingsCtx.pastDays}`;
  }

  useEffect(() => {
    if (props.hourlyData.length !== 0) {
      setHourlyString("&hourly=" + props.hourlyData.join(","));
    } else setHourlyString("");
  }, [props.hourlyData]);

  useEffect(() => {
    if (props.dailyData.length !== 0) {
      setDailyString("&daily=" + props.dailyData.join(","));
    } else setDailyString("");
  }, [props.dailyData]);

  useEffect(() => {
    fetch(
      `${API_URL}?latitude=${props.location.lat}&longitude=${props.location.lng}${hourlyString}${dailyString}${temperatureString}${windSpeedString}${precipitationString}&timezone=${settingsCtx.timeZone}${pastDaysString}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Fetching data error");
        } else return response.json();
      })
      .then((data) => {
        if (hourlyString.length !== 0 || dailyString.length !== 0) {
          setFetchedData(data);
        } else {
          setFetchedData(null);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [hourlyString, dailyString]);

  return (
    <>
      {!fetchedData && <h2>Please choose hourly or daily variables for graphic representation!</h2>}
      {fetchedData && <VariablesGraph variables={fetchedData} />}
    </>
  );
};

export default GraphTab;
