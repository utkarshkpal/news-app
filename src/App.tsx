import React, { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";
import Graph1 from "./components/Graph1";
import ApiProviders from "./services/ApiProviders";
import { isServer, isNotEmpty } from "./JSHelper";

const ServiceProvider = new ApiProviders();

interface pageData {
  hits: object[];
  page: number;
}

const getPageFromUrl = (): number => {
  let page = 0;

  const urlParams = new URLSearchParams(window.location.search);
  page = Number(urlParams.get("p"));

  return page;
};

const getAppState = () => {
  let data = {};
  data = JSON.parse(localStorage.getItem("news"));
  return data;
};

export default function App() {
  const [news, setNews] = useState(getAppState());
  const [currentPage, setcurrentPage] = useState(getPageFromUrl());

  const incrementUpvote = (id: string): void => {
    const updatedNews = news[currentPage].map((elem) => {
      const { objectID, points } = elem;
      if (objectID === id) {
        return { ...elem, points: points + 1 };
      } else {
        return elem;
      }
    });
    setNews({ ...news, [currentPage]: updatedNews });
  };

  const updateUrl = (page: number): void => {
    window.history.pushState(null, null, `/news?p=${page}`);
  };

  const hideNews = (id: string): void => {
    const updatedNews = news[currentPage].filter(
      (elem) => elem.objectID !== id
    );
    setNews({ ...news, [currentPage]: updatedNews });
  };

  const saveData = () => {
    localStorage.setItem("news", JSON.stringify(news));
  };

  const fetchNews = (page: number = 0): void => {
    ServiceProvider.fetchNewsByPage(page).then(({ hits, page }) => {
      setNews({ ...news, [page]: hits });
      setcurrentPage(page);
      updateUrl(page);
    });
  };

  useEffect(() => {
    saveData();
  }, [news]);

  useEffect(() => {
    fetchNews(currentPage);
  }, []);

  return (
    <div className="App">
      <Table
        incrementUpvote={incrementUpvote}
        news={isNotEmpty(news) ? news[currentPage] : []}
        hideNews={hideNews}
        fetchNews={fetchNews}
        currentPage={currentPage}
      />
      <Graph1 news={isNotEmpty(news) ? news[currentPage] : []} />
    </div>
  );
}
