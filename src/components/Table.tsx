import React from "react";
import "./Table.css";
import NewsListItem from "./NewsListItem";

function Header() {
  return (
    <div className="nav-bar">
      <div className="comment">Comments</div>
      <div className="vote-count">Vote Count</div>
      <div className="upvotes">UpVote</div>
      <div className="news-details">News Details</div>
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
      </ul>
      {/* <div className="foot-graph">This is where Graph plotthing will come</div> */}
    </div>
  );
}
