import { NavLink } from "react-router-dom";
import { CiCirclePlus } from "react-icons/ci";
import CartTable from "./CartTable";

type Props = {
  onProceedToCheckOut: () => void;
};

function CartDetails({ onProceedToCheckOut }: Props) {
  return (
    <div className="mt-20">
      <h1 className="uppercase text-3xl text-center font-bold font-montserrat my-4 text-slate-800">
        Review your order
      </h1>
      <NavLink
        to="/meals"
        className="bg-yellow-600 text-white flex items-center uppercase w-fit px-2 py-3"
      >
        <CiCirclePlus size={25} />
        <div>Add more items</div>
      </NavLink>
      <CartTable onProceedToCheckOut={onProceedToCheckOut} />
    </div>
  );
}

export default CartDetails;
