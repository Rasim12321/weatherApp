import styles from "./WeatherCard.module.css";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useTranslation } from "react-i18next";

const WeatherCard = () => {
  const { t } = useTranslation();
  const { cityWeather } = useTypedSelector((state) => state.cityWeaherData);
  return cityWeather == null ? null : (
    <div className={styles.card}>
      <div className="d-flex justify-content-between">
        <div>
          <div className={styles.city}>{cityWeather.name}</div>
          <div className={styles.caption}>{cityWeather.weather[0].main}</div>
        </div>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${cityWeather.weather[0].icon}.png`}
            alt="weather"
          />
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center">
        <div className={styles.degree}>
          {Math.round(cityWeather.main.temp)}°
        </div>
        <div className={styles.detailsContainer}>
          <div>{t("card.details")}:</div>
          <div className="d-flex justify-content-between">
            <div className={styles.caption}>{t("card.feelsLike")}</div>
            <div className={styles.caption}>
              {Math.round(cityWeather.main.feels_like)}°
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className={styles.caption}>{t("card.wind")}</div>
            <div className={styles.caption}>
              {cityWeather.wind.speed} {t("card.speed")}
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className={styles.caption}>{t("card.humidity")}</div>
            <div className={styles.caption}>{cityWeather.main.humidity}%</div>
          </div>
          <div className="d-flex justify-content-between">
            <div className={styles.caption}>{t("card.pressure")}</div>
            <div className={styles.caption}>
              {cityWeather.main.pressure} hPa
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
