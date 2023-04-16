import CitiesList from "../CitiesList/CitiesList";
import SearchArea from "../searchArea/SearchArea";
import style from "./layout.module.css";

const Layout = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <CitiesList />
        <SearchArea />
      </div>
    </div>
  );
};

export default Layout;
