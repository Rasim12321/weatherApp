import { useTranslation } from "react-i18next";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import styles from "./Forecast.module.css";

const Hourly = () => {
  const { hourlyForecast } = useTypedSelector(
    (state) => state.hourlyForecastData
  );
  const { t } = useTranslation();
  return hourlyForecast === null ? null : (
    <>
      <div className={styles.blocks}>
        <div className={styles.block}>
          <h5>{hourlyForecast.list[1].dt_txt.slice(11, 16)}</h5>
          <img
            src={`https://openweathermap.org/img/wn/${hourlyForecast.list[1].weather[0].icon}.png`}
            alt=""
          />
          <p>{Math.round(hourlyForecast.list[1].main.temp)}°</p>
          <p>
            {Math.round(hourlyForecast.list[1].wind.speed)} {t("card.speed")}
          </p>
          <p>{hourlyForecast.list[1].main.humidity}%</p>
          <p>{hourlyForecast.list[1].main.pressure} hPa</p>
        </div>
        <div className={styles.block}>
          <h5>{hourlyForecast.list[2].dt_txt.slice(11, 16)}</h5>
          <img
            src={`https://openweathermap.org/img/wn/${hourlyForecast.list[2].weather[0].icon}.png`}
            alt=""
          />
          <p>{Math.round(hourlyForecast.list[2].main.temp)}°</p>
          <p>
            {Math.round(hourlyForecast.list[2].wind.speed)} {t("card.speed")}
          </p>
          <p>{hourlyForecast.list[2].main.humidity}%</p>
          <p>{hourlyForecast.list[2].main.pressure} hPa</p>
        </div>
        <div className={styles.block}>
          <h5>{hourlyForecast.list[3].dt_txt.slice(11, 16)}</h5>
          <img
            src={`https://openweathermap.org/img/wn/${hourlyForecast.list[3].weather[0].icon}.png`}
            alt=""
          />
          <p>{Math.round(hourlyForecast.list[3].main.temp)}°</p>
          <p>
            {Math.round(hourlyForecast.list[3].wind.speed)} {t("card.speed")}
          </p>
          <p>{hourlyForecast.list[3].main.humidity}%</p>
          <p>{hourlyForecast.list[3].main.pressure} hPa</p>
        </div>
        <div className={styles.block}>
          <h5>{hourlyForecast.list[4].dt_txt.slice(11, 16)}</h5>
          <img
            src={`https://openweathermap.org/img/wn/${hourlyForecast.list[4].weather[0].icon}.png`}
            alt=""
          />
          <p>{Math.round(hourlyForecast.list[4].main.temp)}°</p>
          <p>
            {Math.round(hourlyForecast.list[4].wind.speed)} {t("card.speed")}
          </p>
          <p>{hourlyForecast.list[4].main.humidity}%</p>
          <p>{hourlyForecast.list[4].main.pressure} hPa</p>
        </div>
        <div className={styles.block}>
          <h5>{hourlyForecast.list[5].dt_txt.slice(11, 16)}</h5>
          <img
            src={`https://openweathermap.org/img/wn/${hourlyForecast.list[5].weather[0].icon}.png`}
            alt=""
          />
          <p>{Math.round(hourlyForecast.list[5].main.temp)}°</p>
          <p>
            {Math.round(hourlyForecast.list[5].wind.speed)} {t("card.speed")}
          </p>
          <p>{hourlyForecast.list[5].main.humidity}%</p>
          <p>{hourlyForecast.list[5].main.pressure} hPa</p>
        </div>
      </div>
    </>
  );
};

export default Hourly;
