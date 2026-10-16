import { fireEvent, render, screen } from "@testing-library/react";
import mock_data from "../mocks/RestMenuItem.json";
import RestaurentMenu from "../components/RestaurentMenu";
import { act } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../redux/createStore";
import Header from "../components/Header";
import Cart from "../components/Cart";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(mock_data) }),
);

describe("Cart flow", () => {
  it("Add item to cart", async () => {
    await act(async () => {
      await render(
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Provider store={appStore}>
            <RestaurentMenu />
            <Header />
            <Cart />
          </Provider>
        </BrowserRouter>,
      );
    });
    const menuText = screen.getByText("Recommended - (3)");

    fireEvent.click(menuText);

    const btnAdd = screen.getAllByRole("button", { name: "Add +" });

    fireEvent.click(btnAdd[0]);

    const cartItem = screen.getByText("cart (1)");

    fireEvent.click(cartItem);

    const itemName = screen.getByRole("heading", { name: "Cart" });

    expect(itemName).toBeInTheDocument();

    const clearBtn = screen.getByRole("button", { name: "Clear Cart" });

    expect(clearBtn).toBeInTheDocument();

    fireEvent.click(clearBtn);

    const msgText = screen.getByText("No cart Items added");

    expect(msgText).toBeInTheDocument();
  });
});
