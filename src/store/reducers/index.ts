import { combineReducers } from "redux";
import { cityWeatherReducer } from "./cityWeather.reducer";
import { dailyForecastReducer } from "./dailyForecast.reducer";
import { hourlyForecastReducer } from "./hourlyForecast.reducer";
import { unitReducer } from "./unit.reducer";

export const rootReducer = combineReducers<any>({
  cityWeaherData: cityWeatherReducer,
  dailyForecastData: dailyForecastReducer,
  hourlyForecastData: hourlyForecastReducer,
  unit: unitReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
