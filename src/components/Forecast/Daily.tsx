import { useTranslation } from "react-i18next";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import styles from "./Forecast.module.css";

const Daily = () => {
  const { dailyForecast } = useTypedSelector(
    (state) => state.dailyForecastData
  );
  const { t } = useTranslation();
  const time = dailyForecast.list[0].dt_txt.slice(11);
  const daily: any = [];
  dailyForecast.list.map((item: any) =>
    item.dt_txt.slice(11) === time ? daily.push(item) : null
  );
  return dailyForecast === null ? null : (
    <>
      <div className={styles.blocks}>
        <div className={styles.block}>
          <h5>
            {daily[0].dt_txt.slice(8, 10)}.{daily[0].dt_txt.slice(5, 7)}
          </h5>
          <img
            src={`https://openweathermap.org/img/wn/${daily[0].weather[0].icon}.png`}
            alt=""
          />
          <p>{Math.round(daily[0].main.temp)}°</p>
          <p>
            {Math.round(daily[0].wind.speed)} {t("card.speed")}
          </p>
          <p>{daily[0].main.humidity}%</p>
          <p>{daily[0].main.pressure} hPa</p>
        </div>
        <div className={styles.block}>
          <h5>
            {daily[1].dt_txt.slice(8, 10)}.{daily[1].dt_txt.slice(5, 7)}
          </h5>
          <img
            src={`https://openweathermap.org/img/wn/${daily[1].weather[0].icon}.png`}
            alt=""
          />
          <p>{Math.round(daily[1].main.temp)}°</p>
          <p>
            {Math.round(daily[1].wind.speed)} {t("card.speed")}
          </p>
          <p>{daily[1].main.humidity}%</p>
          <p>{daily[1].main.pressure} hPa</p>
        </div>
        <div className={styles.block}>
          <h5>
            {daily[2].dt_txt.slice(8, 10)}.{daily[2].dt_txt.slice(5, 7)}
          </h5>
          <img
            src={`https://openweathermap.org/img/wn/${daily[2].weather[0].icon}.png`}
            alt=""
          />
          <p>{Math.round(daily[2].main.temp)}°</p>
          <p>
            {Math.round(daily[2].wind.speed)} {t("card.speed")}
          </p>
          <p>{daily[2].main.humidity}%</p>
          <p>{daily[2].main.pressure} hPa</p>
        </div>
        <div className={styles.block}>
          <h5>
            {daily[3].dt_txt.slice(8, 10)}.{daily[3].dt_txt.slice(5, 7)}
          </h5>
          <img
            src={`https://openweathermap.org/img/wn/${daily[3].weather[0].icon}.png`}
            alt=""
          />
          <p>{Math.round(daily[3].main.temp)}°</p>
          <p>
            {Math.round(daily[3].wind.speed)} {t("card.speed")}
          </p>
          <p>{daily[3].main.humidity}%</p>
          <p>{daily[3].main.pressure} hPa</p>
        </div>
        <div className={styles.block}>
          <h5>
            {daily[4].dt_txt.slice(8, 10)}.{daily[4].dt_txt.slice(5, 7)}
          </h5>
          <img
            src={`https://openweathermap.org/img/wn/${daily[4].weather[0].icon}.png`}
            alt=""
          />
          <p>{Math.round(daily[4].main.temp)}°</p>
          <p>
            {Math.round(daily[4].wind.speed)} {t("card.speed")}
          </p>
          <p>{daily[4].main.humidity}%</p>
          <p>{daily[4].main.pressure} hPa</p>
        </div>
      </div>
    </>
  );
};

export default Daily;
