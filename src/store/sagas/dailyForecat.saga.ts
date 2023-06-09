import { takeLatest, put, select } from "redux-saga/effects";
import axios from "axios";
import { setDailyForecast, setLoading } from "../actions/cityWeather.action";
import * as toastr from "toastr";
//@ts-ignore
function* dailyForecastWorker({ payload }: object): object {
  try {
    yield put(setLoading(true));

    const unit = yield select((state) => state.unit);
    const { data }: any = yield axios.get("/forecast", {
      params: { lat: payload.lat, lon: payload.lon, units: unit },
    });

    yield put(setDailyForecast(data));
    yield put(setLoading(false));
  } catch (error: any) {
    toastr.error(error.message);
    yield put(setLoading(false));
  }
}

export function* dailyForecastWatcher() {
  yield takeLatest("GET_DAILY_FORECAST", dailyForecastWorker);
}
