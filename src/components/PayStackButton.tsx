import { PaystackButton } from "react-paystack";
import { useState } from "react";
import swal from "sweetalert";
// import {useSelector, useDispatch} from "react-redux"
import { useAppSelector } from "../app/hook";
import { useAuth } from "../hooks/useAuth";
import { getCartTotal } from "../features/cart/cartSlice";

function PayStackButton() {
  const { user } = useAuth();
  const total = useAppSelector(getCartTotal);
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_TEST_KEY as string;
  const componentProps = {
    email: user?.email as string,
    amount: total * 100,
    publicKey,
    text: "Click to pay!",
    onClose: () => swal("Failed!!", "Order cancelled", "error"),
    //send order to backend on success of this paystack call
  };
  return (
    <PaystackButton
      {...componentProps}
      className="bg-white text-yellow-600 uppercase font-bold w-[150px] py-2 flex items-center justify-center"
    />
  );
}

export default PayStackButton;
