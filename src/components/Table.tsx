import React from "react";
import "./Table.css";
import NewsListItem from "./NewsListItem";

const Header = () => (
  <div className="nav-bar">
    <div className="comment">Comments</div>
    <div className="vote-count">Vote Count</div>
    <div className="upvotes">UpVote</div>
    <div className="news-details">News Details</div>
  </div>
);

export default function Table({ news }) {
  return (
    <div className="container">
      <Header />

      <div className="news-list">
        <NewsListItem />
        <div className="paging-footer">
          <button className="paging">Previous |</button>
          <button className="paging">Next</button>
        </div>
      </div>
      {/* <div className="foot-graph">This is where Graph plotthing will come</div> */}
    </div>
  );
}
