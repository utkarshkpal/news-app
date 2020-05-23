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
const getPageFromUrl = (): number => {
  const urlParams = new URLSearchParams(window.location.search);
  return Number(urlParams.get("p"));
};

const App = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setcurrentPage] = useState(getPageFromUrl());

  const incrementUpvote = (id: string): void => {
    const updatedNews = news.map((elem) => {
      const { objectID, points } = elem;
      if (objectID === id) {
        return { ...elem, points: points + 1 };
      } else {
        return elem;
      }
    });
    setNews(updatedNews);
  };

  const updateUrl = (page: number): void => {
    window.history.pushState(null, null, `/news?p=${page}`);
  };

  const hideNews = (id: string): void => {
    const updatedNews = news.filter((elem) => elem.objectID !== id);
    setNews(updatedNews);
  };

  const fetchNews = (page: number = 0): void => {
    ServiceProvider.fetchNewsByPage(page).then(({ hits, page }) => {
      setNews(hits);
      setcurrentPage(page);
      updateUrl(page);
    });
  };

  useEffect(() => {
    fetchNews(currentPage);
  }, []);

  return (
    <div className="App">
      <Table
        incrementUpvote={incrementUpvote}
        news={news}
        hideNews={hideNews}
        fetchNews={fetchNews}
        currentPage={currentPage}
      />
      <Graph news={news} />
    </div>
  );
};

export default App;
