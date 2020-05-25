import Table from "components/Table";
import { render, cleanup, fireEvent } from "@testing-library/react";
import React from "react";
import * as news from "./mockNewsData.json";

const incrementUpvote = jest.fn();
const hideNews = jest.fn();
const fetchNews = jest.fn();

const tableProps = {
  currentPage: 1,
  incrementUpvote,
  hideNews,
  fetchNews,
  news: news.hits,
};

afterEach(cleanup);

it("renders Table component without crashing", () => {
  render(<Table {...tableProps} />);
});

it("renders 20 news at a time", () => {
  const { getAllByTestId } = render(<Table {...tableProps} />);
  expect(getAllByTestId("news-list-item").length).toBe(20);
});

it("calls fetchNews prop on clicking next with correct page number", () => {
  const { currentPage, fetchNews } = tableProps;
  const { getByTestId } = render(<Table {...tableProps} />);
  const nextBtn = getByTestId("next");
  fireEvent.click(nextBtn);
  expect(fetchNews).toHaveBeenCalledWith(currentPage + 1);
});
