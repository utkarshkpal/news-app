import React from "react";

export default function NewsListItem({ newsItem }) {
  const { numComments, points, title, author, createdAt, url } = newsItem;
  return (
    <div className="news-list-item">
      <div className="comment">{numComments}</div>
      <div className="vote-count">{points}</div>
      <div className="upvotes">
        <div className="arrow-up"></div>
      </div>
      <div className="news-details">
        <div className="news-title">
          <a href="">{title}</a>
        </div>
        {/* <div className="news-source">{url}</div> */}
        by
        <div className="news-person" style={{ fontWeight: "bold" }}>
          {author}
        </div>
        <div className="news-time">{createdAt}</div>
        <div className="news-hide-option" style={{ fontWeight: "bold" }}>
          [hide]
        </div>
      </div>
    </div>
  );
}
