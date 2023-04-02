import React from "react";
import style from "./CitiesList.module.css";

const cities = [
  { name: "London" },
  { name: "Sydney" },
  { name: "Tokyo" },
  { name: "Toronto" },
  { name: "Paris" },
];

const CitiesList = () => {
  const handleOnClick = (cityName) => {
    console.log(cityName + " was clicked");
  };

  return (
    <div className={style.cities}>
      {cities.map((city) => (
        <button
          onClick={() => handleOnClick(city.name)}
          key={city.name}
          className={style.cityBtn}
        >
          {city.name}
        </button>
      ))}
    </div>
  );
};

export default CitiesList;
