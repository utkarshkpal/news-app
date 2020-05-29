import React from "react";

interface OwnProps {
  newsItem: any;
  incrementUpvote(id: string): void;
  hideNews(id: string): void;
}

export default function NewsListItem({ newsItem, incrementUpvote, hideNews }) {
  const {
    numComments,
    points,
    title,
    author,
    createdAt,
    url,
    objectID,
  } = newsItem;
  return (
    <li key={objectID} className="news-list-item" data-testid="news-list-item">
      <div className="comment">{numComments}</div>
      <div data-testid="vote-count" className="vote-count">
        {points}
      </div>
      <div
        data-testid="upvote"
        onClick={() => {
          incrementUpvote(objectID);
        }}
        className="upvotes"
      >
        <div className="arrow-up"></div>
      </div>
      <div className="news-details">
        <div data-testid="news-title" className="news-title">
          {title}
        </div>
        {/* <div className="news-source">{url}</div> */}
        by
        <div className="news-person" style={{ fontWeight: "bold" }}>
          {author}
        </div>
        <div className="news-time">{createdAt}</div>
        <div
          data-testid="news-hide"
          onClick={() => {
            hideNews(objectID);
          }}
          className="news-hide-option"
          style={{ fontWeight: "bold" }}
        >
          [hide]
        </div>
      </div>
    </li>
  );
}
