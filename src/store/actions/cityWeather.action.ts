import { GET_CITY_WEATHER } from "./actionTypes";

export interface coords {
  lat: number;
  lon: number;
}
export const getCityWeather = (coords: coords | null) => ({
  type: GET_CITY_WEATHER,
  payload: coords,
});

export const setCityWeather = (cityWeather: number) => ({
  type: "SET_CITY_WEATHER",
  payload: cityWeather,
});

export const setLoading = (isLoading: boolean) => ({
  type: "SET_LOADING",
  payload: isLoading,
});

export const getDailyForecast = (coords: coords | null) => ({
  type: "GET_DAILY_FORECAST",
  payload: coords,
});

export const setDailyForecast = (dailyForecast: any) => ({
  type: "SET_DAILY_FORECAST",
  payload: dailyForecast,
});

export const getHourlyForecast = (coords: coords | null) => ({
  type: "GET_HOURLY_FORECAST",
  payload: coords,
});

export const setHourlyForecast = (hourlyForecast: any) => ({
  type: "SET_HOURLY_FORECAST",
  payload: hourlyForecast,
});

export const setUnit = (unit: "metric" | "imperial") => ({
  type: "SET_UNIT",
  payload: unit,
});
