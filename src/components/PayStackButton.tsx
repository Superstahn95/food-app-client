/* eslint-disable react/jsx-props-no-spreading */
import { PaystackButton } from "react-paystack";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import swal from "sweetalert";
// import {useSelector, useDispatch} from "react-redux"
import { useAppSelector } from "../app/hook";
import { useAuth } from "../hooks/useAuth";
import { getCartTotal } from "../features/cart/cartSlice";
import { useFormikContext } from "../hooks/useFormikContext";

function PayStackButton() {
  const { user } = useAuth();
  const total = useAppSelector(getCartTotal);
  const onSuccess = () => {
    console.log("payment success");
  };
  const { handleSubmit } = useFormikContext();
  const [reference, setReference] = useState<string | null>(null);
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_TEST_KEY as string;
  console.log(publicKey);
  const componentProps = {
    email: user?.email as string,
    amount: total * 100,
    reference: reference as string,
    publicKey,
    text: "Click to pay!",
    onClose: () => swal("Failed!!", "Order cancelled", "error"),
    onSuccess,
    // send order to backend on success of this paystack call
  };
  // generate unique reference on mount of this component
  useEffect(() => {
    setReference(`order_${uuidv4()}`);
  }, []);
  return (
    <PaystackButton
      {...componentProps}
      className="bg-white text-yellow-600 uppercase font-bold w-[150px] py-2 flex items-center justify-center"
    />
  );
}

export default PayStackButton;
