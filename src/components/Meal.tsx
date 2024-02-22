import { useState } from "react";

type Props = {
  id: string;
  name: string;
  price: number;
  imageAddress: string;
};
function Meal({ id, name, price, imageAddress }: Props) {
  const [quantity, setQuantity] = useState(1);
  return (
    <div
      id={name}
      className="flex items-center space-x-20 py-4 mb-4 border-b border-black"
    >
      <div>
        <img src={imageAddress} alt={name} className="w-[100px] h-[100px]" />
      </div>
      {/* name and button */}
      <div className="space-y-2">
        <p className="font-bold underline text-lg uppercase font-montserrat">
          {name}
        </p>
        <button
          type="button"
          className="bg-yellow-600 text-white px-3 py-2 rounded-sm uppercase font-bold font-montserrat"
        >
          Add to Cart
        </button>
      </div>
      {/* quantity and price */}
      <div className="flex flex-col space-y-7">
        <div className="flex items-center space-x-2 ">
          <span className="font-montserrat">Quantity</span>
          <input
            type="number"
            className="w-[50px]"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
          />
        </div>
        <span className="self-end font-montserrat">{price}</span>
      </div>
    </div>
  );
}

export default Meal;
