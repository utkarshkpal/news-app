import React from "react";
import "./Table.css";
import NewsListItem from "./NewsListItem";

function Header() {
  return (
    <div className="nav-bar">
      <div className="comment nav-item">Comments</div>
      <div className="vote-count nav-item">Vote Count</div>
      <div className="upvotes nav-item">UpVote</div>
      <div className=" nav-item nav-details  ">News Details</div>
    </div>
  );
}

export default function Table({
  news,
  incrementUpvote,
  hideNews,
  fetchNews,
  currentPage,
}) {
  return (
    <div className="container">
      <Header />

      <ul data-testid="news-list" className="news-list">
        {news?.map((newsItem) => (
          <NewsListItem
            key={newsItem.objectID}
            newsItem={newsItem}
            incrementUpvote={incrementUpvote}
            hideNews={hideNews}
          />
        ))}

        <div className="paging-footer">
          <div className="paging-item">
            <button
              onClick={() => {
                if (currentPage > 0) {
                  fetchNews(currentPage - 1);
                }
              }}
              className="paging"
              data-testid="previous"
            >
              Previous |
            </button>
            <button
              onClick={() => {
                fetchNews(currentPage + 1);
              }}
              className="paging"
              data-testid="next"
            >
              Next
            </button>
          </div>
        </div>
      </ul>
    </div>
  );
}
