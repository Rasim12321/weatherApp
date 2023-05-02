import { useDispatch, useSelector } from "react-redux";
import SearchAutocomplete from "./components/SearchAutocomplete/SearchAutocomplete";
import { useCallback, useEffect, useState } from "react";
import { useTypedSelector } from "./hooks/useTypedSelector";
import {
  getCityWeather,
  getDailyForecast,
  getHourlyForecast,
} from "./store/actions/cityWeather.action";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import styles from "./App.module.css";
import Header from "./components/Header";
import Forecast from "./components/Forecast/Forecast";
import Loading from "./components/Loading";

function App() {
  const dispatch = useDispatch();
  const [currentCityId, setCurrentCityId] = useState<number | null>(null);
  const unit = useTypedSelector((state) => state.unit);
  const { isLoading } = useTypedSelector((state) => state.cityWeaherData);
  const onSearchChangeHanlder = useCallback((city: number) => {
    setCurrentCityId(city);
    dispatch(getCityWeather(city));
    dispatch(getDailyForecast(city));
    dispatch(getHourlyForecast(city));
  }, []);

  useEffect(() => {
    if (currentCityId) {
      dispatch(getCityWeather(currentCityId));
      dispatch(getDailyForecast(currentCityId));
      dispatch(getHourlyForecast(currentCityId));
    }
  }, [unit]);

  console.log(isLoading);

  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className="w-75 mt-3 d-flex flex-column gap-4">
          <SearchAutocomplete onSearchChange={onSearchChangeHanlder} />
          {isLoading == true ? (
            <div className={styles.loading}>
              <Loading />
            </div>
          ) : (
            <>
              <WeatherCard />
              <Forecast />
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
