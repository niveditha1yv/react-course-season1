import { useDispatch, useSelector } from "react-redux";
import ItemMenu from "./ItemMenu";
import { clearItems } from "./redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearItems());
  };
  return (
    <div className="text-center ">
      <h1 className="text-3xl font-bold m-3">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-3 bg-blue-400 rounded-2xl cursor-pointer"
          onClick={handleClear}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 ? (
          <h1 className="text-2xl font-bold m-3">No cart Items added</h1>
        ) : (
          <ItemMenu data={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
