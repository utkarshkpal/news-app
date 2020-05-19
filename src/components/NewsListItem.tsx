import React from "react";

export default function NewsListItem() {
  return (
    <div className="news-list-item">
      <div className="comment">88</div>
      <div className="vote-count">222</div>
      <div className="upvotes">
        <div className="arrow-up"></div>
      </div>
      <div className="news-details">
        <div className="news-title">
          <a href="">
            Your Apps Know Where You Were Last Night, and They're Not Keeping It
            Secret
          </a>
        </div>
        <div className="news-source">(nytimes.com)</div>
        by
        <div className="news-person" style={{ fontWeight: "bold" }}>
          pci
        </div>
        <div className="news-time">2 hours ago</div>
        <div className="news-hide-option" style={{ fontWeight: "bold" }}>
          [hide]
        </div>
      </div>
    </div>
  );
}
