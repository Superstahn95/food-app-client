import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useAppSelector, useAppDispatch } from "../app/hook";
import {
  removeItem,
  getCartTotal,
  updateQuantity,
} from "../features/cart/cartSlice";

type Props = {
  onProceedToCheckOut: () => void;
};

function CartTable({ onProceedToCheckOut }: Props) {
  const [isCartUpdated, setIsCartUpdated] = useState(false);
  const { cart } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  // const [quantity, setQuantity] = useState(cart)
  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };
  const total = useAppSelector(getCartTotal);

  const handleQuantityChange = (_id: string, quantity: number) => {
    dispatch(updateQuantity({ _id, quantity }));
    setIsCartUpdated(true);
  };

  return (
    <>
      <div className="my-4">
        {cart.map((item) => (
          <div
            key={item._id}
            className="flex items-center justify-between font-montserrat border border-black/80 mt-5 p-4"
          >
            <button
              onClick={() => handleRemoveItem(item._id)}
              type="button"
              className="flex items-center space-x-1"
            >
              <AiOutlineClose />
              <span className="uppercase text-black/60">remove</span>
            </button>
            <div>
              <img
                src={item.mealImage}
                alt={item.name}
                className="w-[70px] h-[70px]"
              />
            </div>
            <div>{item.name}</div>
            <div className="flex items-center space-x-2 ">
              <span className="font-montserrat">Quantity</span>
              <input
                type="number"
                className="w-[50px]"
                value={item.quantity}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleQuantityChange(item._id, parseInt(e.target.value, 10))
                }
              />
            </div>
            <div>{item.price * item.quantity}</div>
          </div>
        ))}
      </div>
      <div className="w-fit ml-auto mb-4">
        <button
          type="button"
          disabled={!isCartUpdated}
          className={`${isCartUpdated ? "bg-yellow-600" : "bg-slate-400"}  text-white font-montserrat  uppercase  px-2 py-3`}
        >
          Update Cart
        </button>
      </div>
      <div className="w-[300px] flex flex-col space-y-3 ml-auto mb-4">
        <div className="flex items-center justify-between">
          <span className="font-bold font-montserrat">TOTAL</span>
          <span className="font-medium font-montserrat">{total}</span>
        </div>
        <button
          type="button"
          onClick={onProceedToCheckOut}
          className="bg-yellow-600 text-white  uppercase  px-2 py-3 font-montserrat"
        >
          Checkout
        </button>
      </div>
    </>
  );
}

export default CartTable;
