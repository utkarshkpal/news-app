import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";
import Graph from "./components/Graph";
import ApiProviders from "./services/ApiProviders";

const ServiceProvider = new ApiProviders();

interface pageData {
  hits: object[];
  page: number;
}

const App = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setcurrentPage] = useState(0);

  useEffect(() => {
    const data: any = ServiceProvider.fetchNewsByPage(currentPage).then(
      //what the fuck is this
      ({ hits, page }) => {
        setNews(hits);
        setcurrentPage(page);
      }
    );
  }, []);

  return (
    <div className="App">
      <Table news={news} />
      <Graph />
    </div>
  );
};

export default App;
