import { useState, useEffect } from "react";
import { getForecastFromLonLat } from "../../data/APIs/APIs";

export const useForecast = (coordinates) => {
  const [humidity, setHumidity] = useState([]);
  const [temperatures, setTemperatures] = useState([]);
  const [xAxisDates, setXAxisDates] = useState([]);

  const getAndSetForecastData = async (coordinates) => {
    const threeDaysForecast = await getForecastFromLonLat(
      coordinates[1],
      coordinates[0]
    );

    threeDaysForecast.forEach((day) => {
      let date = new Date(day.dt * 1000);
      date = date.toLocaleDateString("fr-fr");
      setTemperatures((prevState) => [...prevState, Math.floor(day.temp.day)]);
      setHumidity((prevState) => [...prevState, day.humidity]);
      setXAxisDates((prevState) => [...prevState, date]);
    });
  };
  useEffect(() => {
    getAndSetForecastData(coordinates);
  }, [coordinates]);

  return { humidity, temperatures, xAxisDates };
};
