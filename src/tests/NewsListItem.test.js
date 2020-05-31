import React from "react";
import NewsListItem from "components/NewsListItem";
import { render, cleanup, fireEvent } from "@testing-library/react";

const newsItem = {
  numComments: "544545",
  points: 5465,
  title: "Title",
  author: "Author",
  createdAt: "time",
  url: "source url",
  objectID: "2737282",
};
const incrementUpvote = jest.fn();
const hideNews = jest.fn();

afterEach(cleanup);

it("renders newsListItem component", () => {
  render(
    <NewsListItem
      newsItem={newsItem}
      incrementUpvote={incrementUpvote}
      hideNews={hideNews}
    />
  );
});

it("correctly renders news upvote count and title of a given news", () => {
  const { getByTestId } = render(
    <NewsListItem
      newsItem={newsItem}
      incrementUpvote={incrementUpvote}
      hideNews={hideNews}
    />
  );
  const renderedTitle = getByTestId("news-title");
  const renderedUpvotes = getByTestId("vote-count-item");

  expect(renderedTitle.innerHTML).toBe(newsItem.title);
  expect(Number(renderedUpvotes.innerHTML)).toBe(newsItem.points);
});

it("calls incrementUpvote prop on upvote icon click", async () => {
  const { findByTestId } = render(
    <NewsListItem
      newsItem={newsItem}
      incrementUpvote={incrementUpvote}
      hideNews={hideNews}
    />
  );
  const upvoteBtn = await findByTestId("upvote");
  fireEvent.click(upvoteBtn);
  expect(incrementUpvote).toHaveBeenCalled();
});

it("calls hideNews prop on clicking hide", async () => {
  const { findByTestId } = render(
    <NewsListItem
      newsItem={newsItem}
      incrementUpvote={incrementUpvote}
      hideNews={hideNews}
    />
  );
  const hideBtn = await findByTestId("news-hide");
  fireEvent.click(hideBtn);
  expect(hideNews).toHaveBeenCalled();
});
