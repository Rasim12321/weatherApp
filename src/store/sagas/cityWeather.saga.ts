import { takeLatest, put, select } from "redux-saga/effects";
import axios from "axios";
import {
  coords,
  setCityWeather,
  setLoading,
} from "../actions/cityWeather.action";
import * as toastr from "toastr";
import { GET_CITY_WEATHER } from "../actions/actionTypes";
//@ts-ignore
function* cityWeatherWorker({ payload }: object): object {
  try {
    const unit = yield select((state) => state.unit);
    yield put(setLoading(true));
    const { data }: any = yield axios.get("/weather", {
      params: { lat: payload.lat, lon: payload.lon, units: unit },
    });
    yield put(setCityWeather(data));
    yield put(setLoading(false));
  } catch (error: any) {
    toastr.error(error.message);
    yield put(setLoading(false));
  }
}

export function* cityWeatherWatcher() {
  yield takeLatest(GET_CITY_WEATHER, cityWeatherWorker);
}
