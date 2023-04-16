import React from "react";
import style from "./seachArea.module.css";
import { UilSearch } from "@iconscout/react-unicons";
import { UilMapMarker } from "@iconscout/react-unicons";

const SearchArea = () => {
  return (
    <div>
      <div className={style.searchContainer}>
        <div>
          <input
            className={style.searchBar}
            placeholder="search for city ..."
          />
        </div>
        <div>
          <button
            type="button"
            className={style.btnPlain}
            onClick={() => console.log("search")}
          >
            <UilSearch color="white" size="20" />
          </button>
          <button type="button" className={style.btnPlain}>
            <UilMapMarker color="white" size="20" />
          </button>
        </div>
        <div className={style.temparatureScale}>
          <div>
            <sup>o</sup>C
          </div>
          <div className={style.divider}>&#124;</div>
          <div>
            <sup>o</sup>F
          </div>
        </div>
      </div>
      <div className={style.localTime}>
        Tuesday, 31 May 2023 | Local Time: 12:46 PM
      </div>
      <div className={style.locationName}>Berlin, DE</div>
      <div className={style.weatherShort}>Cloudy or whatever</div>
    </div>
  );
};

export default SearchArea;
