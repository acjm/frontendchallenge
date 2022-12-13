import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders card and banner components", () => {
  // get elems by test id
  render(<App />);
  const card = screen.getByTestId("cards");
  const banner = screen.getByTestId("banner");
  const title = screen.getByTestId("title");
  // check if card and banner are in the document
  expect(title).toBeInTheDocument();
  expect(card).toBeInTheDocument();
  expect(banner).toBeInTheDocument();
});
