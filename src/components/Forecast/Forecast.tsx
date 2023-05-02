import { useTypedSelector } from "../../hooks/useTypedSelector";
import styles from "./Forecast.module.css";
import Daily from "./Daily";
import Hourly from "./Hourly";
import { Form } from "react-bootstrap";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { setUnit } from "../../store/actions/cityWeather.action";
import { useTranslation } from "react-i18next";

const Forecast = () => {
  const { dailyForecast, unit } = useTypedSelector((state) => ({
    dailyForecast: state.dailyForecastData.dailyForecast,
    unit: state.unit,
  }));
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const setCurrentMetric = useCallback((event: any) => {
    dispatch(setUnit(event.target.value));
  }, []);

  return dailyForecast === null ? null : (
    <>
      <div className={styles.main}>
        <Form.Check
          onChange={setCurrentMetric}
          name="unit"
          type="radio"
          value="metric"
          label="C°"
          checked={unit === "metric"}
          inline
        />
        <Form.Check
          onChange={setCurrentMetric}
          name="unit"
          type="radio"
          label="F°"
          value="imperial"
          checked={unit === "imperial"}
          inline
        />
        <div className={styles.caption}>{t("hourlyForecast")}</div>
        <Hourly />
        <div className={styles.caption}>{t("dailyForecast")}</div>
        <Daily />
      </div>
    </>
  );
};

export default Forecast;
