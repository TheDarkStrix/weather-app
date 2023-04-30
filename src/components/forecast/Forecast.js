import React from "react";
import style from "./forecast.module.css";
const Forecast = ({ title, forcastData }) => {
  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.forecastTitle}>{title}</div>
        <div className={style.hr}></div>
        <div className={style.forecastContainer}>
          {forcastData.map((forcecast) => (
            <div className={style.forecastSingular}>
              <div className={style.forecastTime}>{forcecast.time}</div>
              <div className={style.iconContainer}>
                <img src={forcecast.icon} width={50} height={50} />
              </div>
              <div className={style.temperature}>
                {forcecast.temperature} <sup>o</sup>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forecast;
