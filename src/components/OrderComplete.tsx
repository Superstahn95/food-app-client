import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hook";
import { FaCaravan, FaArrowRight, FaHouseUser } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { resetCart } from "../features/cart/cartSlice";

function OrderComplete() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleReset = () => {
    dispatch(resetCart());
    navigate("/");
  };
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center font-montserrat">
      <div className="flex items-center space-x-4 mb-5">
        <FaBowlFood size={40} className="text-yellow-600" />
        <FaArrowRight size={40} />
        <FaCaravan size={40} className="text-red-600" />
        <FaArrowRight size={40} />
        <FaHouseUser size={40} className="text-green-600" />
      </div>
      <h2 className="text-xl mb-5 text-center">
        Your order has been recieved and will be delivered soon
      </h2>
      <button
        onClick={handleReset}
        type="button"
        className="p-4 bg-yellow-600 rounded-lg text-white"
      >
        Go back
      </button>
    </div>
  );
}

export default OrderComplete;
