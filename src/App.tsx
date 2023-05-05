import { useDispatch, useSelector } from "react-redux";
import SearchAutocomplete from "./components/SearchAutocomplete/SearchAutocomplete";
import { useCallback, useEffect, useState } from "react";
import { useTypedSelector } from "./hooks/useTypedSelector";
import {
  coords,
  getCityWeather,
  getDailyForecast,
  getHourlyForecast,
} from "./store/actions/cityWeather.action";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import styles from "./App.module.css";
import Header from "./components/Header";
import Forecast from "./components/Forecast/Forecast";
import Loading from "./components/Loading";
import { usePosition } from "./UsePosition";
function App() {
  const dispatch = useDispatch();
  const [searchCityCoords, setsearchCityCoords] = useState<coords | null>(null);
  const unit = useTypedSelector((state) => state.unit);
  const { isLoading } = useTypedSelector((state) => state.cityWeaherData);

  const { position } = usePosition();
  const coords: coords = {
    lat: position?.coords.latitude,
    lon: position?.coords.longitude,
  };

  useEffect(() => {
    if (position) {
      setsearchCityCoords(coords);
      dispatch(getCityWeather(coords));
      dispatch(getDailyForecast(coords));
      dispatch(getHourlyForecast(coords));
    }
  }, [position?.coords]);

  const onSearchChangeHanlder = useCallback((city: coords | null) => {
    setsearchCityCoords(city);
    dispatch(getCityWeather(city));
    dispatch(getDailyForecast(city));
    dispatch(getHourlyForecast(city));
  }, []);

  useEffect(() => {
    if (searchCityCoords) {
      dispatch(getCityWeather(searchCityCoords));
      dispatch(getDailyForecast(searchCityCoords));
      dispatch(getHourlyForecast(searchCityCoords));
    }
  }, [unit]);

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
