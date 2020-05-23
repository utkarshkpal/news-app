import React from "react";

interface OwnProps {
  newsItem: any;
  incrementUpvote(id: string): void;
  hideNews(id: string): void;
}

export default function NewsListItem({
  newsItem,
  incrementUpvote,
  hideNews,
}: OwnProps) {
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
    <div className="news-list-item">
      <div className="comment">{numComments}</div>
      <div className="vote-count">{points}</div>
      <div
        onClick={() => {
          incrementUpvote(objectID);
        }}
        className="upvotes"
      >
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
        <div
          onClick={() => {
            hideNews(objectID);
          }}
          className="news-hide-option"
          style={{ fontWeight: "bold" }}
        >
          [hide]
        </div>
      </div>
    </div>
  );
}
