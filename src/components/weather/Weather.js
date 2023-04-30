import React from "react";
import style from "./weather.module.css";
import { UilTemperatureThreeQuarter } from "@iconscout/react-unicons";
import { UilTear } from "@iconscout/react-unicons";
import { UilCloudWind } from "@iconscout/react-unicons";
import { UilSun } from "@iconscout/react-unicons";

const Weather = () => {
  return (
    <div>
      <div className={style.container}>
        <div>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            width={70}
            height={70}
          />
        </div>
        <div className={style.temp}>
          34 <sup>o</sup>
        </div>
        <div>
          <div className={style.line}>
            <div>
              <UilTemperatureThreeQuarter color="white" size="20" />
            </div>
            <div>Real Feel: </div>
            <div className={style.temperature}>
              32 <sup>o</sup>
            </div>
          </div>

          <div className={style.line}>
            <div>
              <UilTear color="white" size="20" />
            </div>
            <div>Humidity: </div>
            <div className={style.temperature}>66 %</div>
          </div>

          <div className={style.line}>
            <div>
              <UilCloudWind color="white" size="20" />
            </div>
            <div>Wind: </div>
            <div className={style.temperature}>11 km/h</div>
          </div>
        </div>
      </div>
      <div className={style.otherDetailsContainer}>
        <UilSun size="20" color="white" />
        <div className={style.detailsTitle}>Rise: </div>
        <div className={style.detailsTime}>06:45 AM</div>
        <div className={style.divider}>|</div>

        <UilSun size="20" color="white" />
        <div className={style.detailsTitle}>Set: </div>
        <div className={style.detailsTime}>06:45 AM</div>
        <div className={style.divider}>|</div>

        <UilSun size="20" color="white" />
        <div className={style.detailsTitle}>High: </div>
        <div className={style.detailsTime}>
          45 <sup>o</sup>
        </div>
        <div className={style.divider}>|</div>

        <UilSun size="20" color="white" />
        <div className={style.detailsTitle}>Low: </div>
        <div className={style.detailsTime}>
          45 <sup>o</sup>
        </div>
      </div>
    </div>
  );
};

export default Weather;
