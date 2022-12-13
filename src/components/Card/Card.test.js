import { render, screen } from "@testing-library/react";
import { Cities } from "../../data/Cities";
import Cards from "./Cards";

it("should render a card with title, description and a button", () => {
  render(<Cards {...Cities[0]} />);
  const title = screen.getByText(Cities[0].name);
  const description = screen.getByText(Cities[0].description);
  const button = screen.getAllByTestId("button");
  expect(title).toBeInTheDocument();
  expect(description).toBeInTheDocument();
  const lenthOfButtons = Cities.length;
  expect(button).toHaveLength(lenthOfButtons);
});
