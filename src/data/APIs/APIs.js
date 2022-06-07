import axios from "axios";

export const getForecastFromLonLat = async (lon, lat) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=539a92a71fbb1b6ee46f8afdfc95bb2e&units=metric`;
  const response = await axios.get(url);
  const data = response.data;
  const dailyTemps = data.daily;

  const threeDaysForecast = dailyTemps.slice(1, 4);

  return threeDaysForecast;
};
