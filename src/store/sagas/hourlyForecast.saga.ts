import { takeLatest, put, select } from "redux-saga/effects";
import axios from "axios";
import { setHourlyForecast, setLoading } from "../actions/cityWeather.action";
import * as toastr from "toastr";

function* hourlyForecastWorker({ payload }: any): any {
  try {
    yield put(setLoading(true));
    const unit = yield select((state) => state.unit);
    const { data }: any = yield axios.get("/forecast", {
      params: { id: payload, units: unit, cnt: 6 },
    });

    yield put(setHourlyForecast(data));
    yield put(setLoading(false));
  } catch (error: any) {
    toastr.error(error.message);
    yield put(setLoading(false));
  }
}

export function* hourlyForecastWatcher() {
  yield takeLatest("GET_HOURLY_FORECAST", hourlyForecastWorker);
}
