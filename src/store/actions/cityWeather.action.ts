import { GET_CITY_WEATHER } from "./actionTypes";

export const getCityWeather = (city: number) => ({
  type: GET_CITY_WEATHER,
  payload: city,
});

export const setCityWeather = (cityWeather: number) => ({
  type: "SET_CITY_WEATHER",
  payload: cityWeather,
});

export const setLoading = (isLoading: boolean) => ({
  type: "SET_LOADING",
  payload: isLoading,
});

export const getDailyForecast = (city: number) => ({
  type: "GET_DAILY_FORECAST",
  payload: city,
});

export const setDailyForecast = (dailyForecast: any) => ({
  type: "SET_DAILY_FORECAST",
  payload: dailyForecast,
});

export const getHourlyForecast = (city: number) => ({
  type: "GET_HOURLY_FORECAST",
  payload: city,
});

export const setHourlyForecast = (hourlyForecast: any) => ({
  type: "SET_HOURLY_FORECAST",
  payload: hourlyForecast,
});

export const setUnit = (unit: "metric" | "imperial") => ({
  type: "SET_UNIT",
  payload: unit,
});
