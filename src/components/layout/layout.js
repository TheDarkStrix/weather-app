import CitiesList from "../CitiesList/CitiesList";
import Forecast from "../forecast/Forecast";
import SearchArea from "../searchArea/SearchArea";
import Weather from "../weather/Weather";
import style from "./layout.module.css";

const forecastData = [
  {
    time: "4:30PM",
    icon: "http://openweathermap.org/img/wn/01d@2x.png",
    temperature: 22,
  },
  {
    time: "4:31PM",
    icon: "http://openweathermap.org/img/wn/01d@2x.png",
    temperature: 22,
  },
  {
    time: "4:32PM",
    icon: "http://openweathermap.org/img/wn/01d@2x.png",
    temperature: 22,
  },
  {
    time: "4:33PM",
    icon: "http://openweathermap.org/img/wn/01d@2x.png",
    temperature: 22,
  },
  {
    time: "4:34PM",
    icon: "http://openweathermap.org/img/wn/01d@2x.png",
    temperature: 22,
  },
];

const Layout = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div className={style.content}>
          <CitiesList />
          <SearchArea />
          <Weather />
          <Forecast title="HOURLY FORECAST" forcastData={forecastData} />
          <Forecast title="DAILY FORECAST" forcastData={forecastData} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
