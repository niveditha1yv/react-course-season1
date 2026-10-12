import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe("Contact us page Test case", () => {
  it("should load contact us page", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("should load input name inside contact page", () => {
    render(<Contact />);

    const name = screen.getByPlaceholderText("name");

    expect(name).toBeInTheDocument();
  });

  it("should load button inside contact page", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should load  2 input baox inside contact page", () => {
    render(<Contact />);

    const input = screen.getAllByRole("textbox");

    expect(input.length).toEqual(2);
  });
});
