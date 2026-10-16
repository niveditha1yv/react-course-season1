import { render, screen } from "@testing-library/react";
import RestaurentCard from "../components/RestaurentCard";
import MOCK_DATA from "../mocks/Restaurent.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { withResturentLabel } from "../components/RestaurentCard";

const RestaurantCardPromoted = withResturentLabel(<RestaurentCard />);

describe("Restaurent Card", () => {
  it("Load Resurant Card", () => {
    render(
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <RestaurentCard resData={MOCK_DATA} />
      </BrowserRouter>,
    );
    const restName = screen.getByText("Pizza Paradise");
    const restStar = screen.getByText("4.3 stars");

    expect(restName).toBeInTheDocument();
    expect(restStar).toBeInTheDocument();
  });

  it("should render the RestaurantCard with the enhanced label", () => {
    render(
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <RestaurantCardPromoted resData={MOCK_DATA} />
      </BrowserRouter>,
    );

    expect(screen.getByText("Pizza Paradise")).toBeInTheDocument();

    const promoted = screen.getByText("Promoted");

    expect(promoted).toBeInTheDocument();
  });
});
