import { useAppSelector } from "../app/hook";
import { selectCartItems, getCartTotal } from "../features/cart/cartSlice";
import { useFormikContext } from "../hooks/useFormikContext";
import { useAuth } from "../hooks/useAuth";
import PayStackButton from "./PayStackButton";

function OrderDetails() {
  const { registerLoading, user } = useAuth();
  const cart = useAppSelector(selectCartItems);
  const total = useAppSelector(getCartTotal);
  const { handleSubmit } = useFormikContext();
  const handleButtonClick = () => {
    console.log("submit formik form");
    handleSubmit();
  };
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
          {user ? (
            <PayStackButton />
          ) : (
            <button
              onClick={handleButtonClick}
              type="button"
              className="bg-white text-yellow-600 uppercase font-bold w-[150px] py-2 flex items-center justify-center"
            >
              {/* replace with a better loading state */}
              {registerLoading ? "Loading...." : "Place Order"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
