import React from "react";
import moment from "moment";

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
      <div className="comment item">{numComments ? numComments : "_"}</div>
      <div data-testid="vote-count-item" className="vote-count">
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
        <div className="news-details-item">
          <a rel="noopener noreferrer" target="_blank" href={url}>
            <div data-testid="news-title" className="news-title">
              {title}
            </div>
          </a>
        </div>
        <div className="news-details-item">
          <span>by</span>
          <span className="news-person" style={{ fontWeight: "bold" }}>
            {author}
          </span>
        </div>
        <div className="news-details-item">
          <span className="news-time">{moment(createdAt).fromNow()}</span>
          <span
            data-testid="news-hide"
            onClick={() => {
              hideNews(objectID);
            }}
            className="news-hide"
            style={{ fontWeight: "bold" }}
          >
            [hide]
          </span>
        </div>
      </div>
    </li>
  );
}
