import { all } from "redux-saga/effects";
import { cityWeatherWatcher } from "./cityWeather.saga";
import { dailyForecastWatcher } from "./dailyForecat.saga";
import { hourlyForecastWatcher } from "./hourlyForecast.saga";

export function* rootWatcher() {
  yield all([
    cityWeatherWatcher(),
    dailyForecastWatcher(),
    hourlyForecastWatcher(),
  ]);
}
