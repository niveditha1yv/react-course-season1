import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import mock_data from "../mocks/ResListData.json";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(mock_data),
  });
});

describe("Search Restaurent", () => {
  it("Search restaurent by name", async () => {
    await act(async () => {
      render(
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Body />
        </BrowserRouter>,
      );
    });

    const resCard = screen.getAllByTestId("resCard");

    expect(resCard.length).toBe(9);

    const searchBtn = screen.getByRole("button", { name: "Search" });

    const inputText = screen.getByTestId("search");

    fireEvent.change(inputText, { target: { value: "spice" } });

    fireEvent.click(searchBtn);

    const filteedResCard = screen.getAllByTestId("resCard");

    expect(filteedResCard.length).toBe(2);
  });

  it("Filter top rated restaurent", async () => {
    await act(async () => {
      render(
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Body />
        </BrowserRouter>,
      );
    });

    const butnTop = screen.getByRole("button", {
      name: "Top rated Restaurents",
    });

    fireEvent.click(butnTop);

    const cardList = screen.getAllByTestId("resCard");

    expect(cardList.length).toBe(3);
  });
});
