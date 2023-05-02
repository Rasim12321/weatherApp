import { takeLatest, put, select } from "redux-saga/effects";
import axios from "axios";
import { setCityWeather, setLoading } from "../actions/cityWeather.action";
import * as toastr from "toastr";
import { GET_CITY_WEATHER } from "../actions/actionTypes";

function* cityWeatherWorker({ payload }: any): any {
  try {
    const unit = yield select((state) => state.unit);
    yield put(setLoading(true));
    const { data }: any = yield axios.get("/weather", {
      params: { id: payload, units: unit },
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
