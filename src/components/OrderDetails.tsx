import { NavLink } from "react-router-dom";
import { useAppSelector } from "../app/hook";
import { selectCartItems, getCartTotal } from "../features/cart/cartSlice";
import PayStackButton from "./PayStackButton";
import { useAuth } from "../hooks/useAuth";

type OrderProps = {
  deliveryAddress: string;
  deliveryAddressNumber: string;
  phoneNumber: string;
  handleCheckOut: (ref: string) => Promise<void>;
};

function OrderDetails({
  deliveryAddress,
  deliveryAddressNumber,
  phoneNumber,
  handleCheckOut,
}: OrderProps) {
  const cart = useAppSelector(selectCartItems);
  const total = useAppSelector(getCartTotal);
  const { user } = useAuth();
  return (
    <div>
      <h2 className="uppercase font-bold text-xl ">Order details</h2>
      <div className="mt-5 bg-yellow-600 py-7 px-4">
        {/* orders */}
        {cart.map((item) => (
          <div className="flex items-center justify-between text-white mb-2">
            <span>
              {item.quantity}x {item.name}
            </span>
            <span>{item.quantity * item.price}</span>
          </div>
        ))}
        {/* subtotal */}
        <div className="flex items-center justify-between text-white border-t border-white py-2 mb-2">
          <span>Subtotal</span>
          <span>{total}</span>
        </div>
        <div className="flex items-center justify-between text-white border-t border-white py-2 mb-2">
          <span>Delivery</span>
          <span>0</span>
        </div>
        <div className="flex items-center justify-between text-white border-t border-white py-2 mb-2">
          <span>Order total</span>
          <span>{total}</span>
        </div>
        <div className="flex items-center justify-center">
          {/* when user is authenticated, i want to display another button that is likely going to send order and billing details to backend */}
          {/* {user ? (
            <button type="button">Nothing here</button>
          ) : (
            <button
              onClick={handleButtonClick}
              type="button"
              className="bg-white text-yellow-600 uppercase font-bold w-[150px] py-2 flex items-center justify-center"
            >
              {registerLoading ? "Loading...." : "Place Order"}
            </button>
          )} */}
          {user ? (
            <PayStackButton
              deliveryAddress={deliveryAddress}
              deliveryAddressNumber={deliveryAddressNumber}
              phoneNumber={phoneNumber}
              handleCheckOut={handleCheckOut}
            />
          ) : (
            <div className="text-red-500">
              <NavLink to="/signup" className="underline">
                Login{" "}
              </NavLink>{" "}
              or{" "}
              <NavLink to="/signup" className="underline">
                signup{" "}
              </NavLink>
              to place your order
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
