import axios from "axios";
const key = process.env.REACT_APP_KEY;
const host = process.env.REACT_APP_API;

export const getCityApi = (city) => {
  const url = `${host}/geo/1.0/direct1?q=${city}&limit=5&appid=${key}`;
  return axios.get(url);
};

export const getWeatherApi = (lat, lon) => {
  const url = `${host}/data/2.5/forecast1?lat=${lat}&lon=${lon}&units=metric&appid=${key}`;
  return axios.get(url);
};
