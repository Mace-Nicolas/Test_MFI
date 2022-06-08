import axios from "axios";

export const getForecastFromLonLat = async (lon, lat) => {
  const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly&appid=8d099a68a8059919509fc3e2691a7c46&units=metric`;
  const response = await axios.get(url);
  const data = response.data;
  const dailyTemps = data.daily;

  const threeDaysForecast = dailyTemps.slice(1, 4);

  return threeDaysForecast;
};
