import { useEffect } from "react";
import "./App.css";
import Layout from "./components/layout/layout";
import { getList } from "./services";

function App() {
  async function getData() {
    const response = await getList();
    console.log(response);
    console.log("asdasdasd");
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Layout />
    </div>
  );
}

export default App;
