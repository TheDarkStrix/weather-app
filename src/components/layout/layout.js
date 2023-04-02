import CitiesList from "../CitiesList/CitiesList";
import style from "./layout.module.css";

const Layout = () => {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <CitiesList />
      </div>
    </div>
  );
};

export default Layout;
