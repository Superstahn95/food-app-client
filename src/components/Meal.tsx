import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useAppDispatch } from "../app/hook";
import { addItem } from "../features/cart/cartSlice";
import { TMeal } from "./RecentMeals";

// type Props = {
//   _id: string;
//   name: string;
//   price: number;
//   imageAddress: string;
// };
function Meal({
  _id,
  name,
  price,
  mealImage,
  category,
  cloudinary_id,
  createdAt,
  description,
}: TMeal) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    // dispatch add to cart functionality
    const data = {
      _id,
      name,
      price,
      quantity,
      mealImage,
      category,
      cloudinary_id,
      createdAt,
      description,
    };
    dispatch(addItem(data)); // add to cart functional
    // throw a toast
    toast.success(" Added to cart!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div
      id={name}
      className="flex flex-col md:flex-row items-center space-x-0 md:space-x-8  justify-between py-4 mb-4 border-b border-black/60 max-w-[700px] "
    >
      <div className="mb-5 md:mb-0">
        <img
          src={mealImage}
          alt={name}
          className="w-[120px] h-[120px] md:w-[100px] md:h-[100px]"
        />
      </div>
      {/* name and button  div flex with quantity and price */}
      <div className="flex flex-1 items-center   px-2  w-full md:px-0">
        {/* name and button */}
        <div className="flex flex-col space-y-7 ">
          <p className="font-bold underline text-sm md:text-lg uppercase font-montserrat">
            {name}
          </p>
          <button
            type="button"
            onClick={handleAddToCart}
            className="bg-yellow-600 text-white text-sm px-2 py-2 md:px-3  rounded-sm uppercase font-bold font-montserrat md:text-lg w-[150px] md:w-[200px]"
          >
            {/* px-3 py-2 */}
            Add to Cart
          </button>
        </div>
        {/* quantity and price */}
        <div className="flex flex-col space-y-7  flex-1 self-end">
          <div className="flex items-center space-x-2 self-end">
            <span className="font-montserrat text-sm md:text-lg">Quantity</span>
            <input
              type="number"
              className="w-[50px]"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
            />
          </div>
          <span className="self-end font-montserrat text-sm px-2 py-2 md:px-3  md:text-lg">
            {price}
          </span>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default Meal;
