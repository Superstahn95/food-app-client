import { AiOutlineClose } from "react-icons/ai";
import { cart } from "../assets/data";

type Props = {
  onProceedToCheckOut: () => void;
};

function CartTable({ onProceedToCheckOut }: Props) {
  return (
    <>
      <div className="my-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between font-montserrat border border-black/80 mt-5 p-4"
          >
            <button type="button" className="flex items-center space-x-1">
              <AiOutlineClose />
              <span className="uppercase text-black/60">remove</span>
            </button>
            <div>
              <img
                src={item.imageAddress}
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
                // value={quantity}
                // onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
              />
            </div>
            <div>{item.price}</div>
          </div>
        ))}
      </div>
      <div className="w-fit ml-auto mb-4">
        <button
          type="button"
          className="bg-yellow-600 text-white font-montserrat  uppercase  px-2 py-3"
        >
          Update Cart
        </button>
      </div>
      <div className="w-[300px] flex flex-col space-y-3 ml-auto mb-4">
        <div className="flex items-center justify-between">
          <span className="font-bold font-montserrat">TOTAL</span>
          <span className="font-medium font-montserrat">3000</span>
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
