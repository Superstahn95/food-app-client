/* eslint-disable react/jsx-props-no-spreading */
import { PaystackButton } from "react-paystack";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import swal from "sweetalert";
import { useAppSelector } from "../app/hook";
import { useAuth } from "../hooks/useAuth";
import { getCartTotal } from "../features/cart/cartSlice";

type ButtonProps = {
  deliveryAddress: string;
  deliveryAddressNumber: string;
  phoneNumber: string;
  handleCheckOut: (ref: string) => Promise<void>;
};

function PayStackButton({
  deliveryAddress,
  deliveryAddressNumber,
  phoneNumber,
  handleCheckOut,
}: ButtonProps) {
  const { user } = useAuth();
  const [reference, setReference] = useState<string | null>(null);
  const total = useAppSelector(getCartTotal);
  const onSuccess = () => {
    console.log(`this is the reference in the function ${reference}`);
    handleCheckOut(reference as string);
  };
  console.log(`onmount,  this is our reference ${reference}`);
  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_TEST_KEY as string;
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
  const popUpModal = () => {
    swal("Missing Fields", "Fill delivery details", "error");
  };
  // generate unique reference on mount of this component
  useEffect(() => {
    setReference(`order_${uuidv4()}`);
  }, []);
  return !deliveryAddress || !deliveryAddressNumber || !phoneNumber ? (
    <button type="button" onClick={popUpModal}>
      Click to pay
    </button>
  ) : (
    <PaystackButton
      {...componentProps}
      className="bg-white text-yellow-600 uppercase font-bold w-[150px] py-2 flex items-center justify-center"
    />
  );
}

export default PayStackButton;
