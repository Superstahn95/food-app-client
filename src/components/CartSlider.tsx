import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { SlHandbag } from "react-icons/sl";
import { useAppSelector } from "../app/hook";

function CartSlider() {
  const [showSlider, setShowSlider] = useState(false);
  // i need to use a hook to check mobile state across my application
  const { cart } = useAppSelector((state) => state.cart);
  return (
    <div
      className={`${showSlider ? "translate-x-0 rounded-tl-[35px]" : "translate-x-[70%] rounded-l-[35px]"} fixed top-[30%] right-0 bg-white w-[500px]  transition-transform duration-500 ease-in-out`}
    >
      <div
        onKeyDown={() => setShowSlider((prev) => !prev)}
        onClick={() => setShowSlider((prev) => !prev)}
        role="button"
        tabIndex={0}
        className="bg-yellow-600 flex items-center  space-x-2 rounded-l-full pl-4 py-4 cursor-pointer"
      >
        <div className="relative text-white">
          <div className="absolute -top-2 -right-4 bg-white w-5 h-5 flex items-center justify-center  rounded-full text-yellow-600">
            {cart.length}
          </div>
          <SlHandbag size={40} />
        </div>
        <div className="bg-white flex-1 font-montserrat rounded-l-md ">
          Cart
        </div>
      </div>
      <div className={`${showSlider ? "block" : " hidden"} p-4`}>
        <div className="max-h-[300px] overflow-y-scroll">
          {cart.length < 1 ? (
            <p className="font-montserrat text-xl mb-5">
              Your cart is currently empty
            </p>
          ) : (
            cart.map((item) => (
              <div className="flex space-x-4 items-center border-b border-slate-800 p-4 font-montserrat">
                <div>
                  <img
                    src={item.imageAddress}
                    alt={item.name}
                    className="w-[100px] h-[100px]"
                  />
                </div>
                <div className="flex-1">
                  <p>{item.name}</p>
                  <p className="font-bold">{item.price}</p>
                </div>
                <div>
                  <AiOutlineClose size={25} className="text-slate-600" />
                </div>
              </div>
            ))
          )}
        </div>
        <div className="flex items-center space-x-4 my-4">
          <button
            type="button"
            className="bg-yellow-600 text-white px-3 py-2 uppercase"
          >
            View/Edit Cart
          </button>
          <button
            type="button"
            className="bg-yellow-600 text-white px-3 py-2 uppercase"
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartSlider;
