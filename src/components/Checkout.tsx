/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import { useState } from "react";
import axios from "axios";
import { useAppSelector } from "../app/hook";
import BillingDetails from "./BillingDetails";
import OrderDetails from "./OrderDetails";
import { getCartTotal } from "../features/cart/cartSlice";
import AuthLoader from "./AuthLoader";
import DeliveryMethod from "./DeliveryMethod";

type CheckoutProps = {
  handleOrderCompleted: () => void;
};

function Checkout({ handleOrderCompleted }: CheckoutProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [deliveryAddressNumber, setDeliveryAddressNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const { cart } = useAppSelector((state) => state.cart);
  const total = useAppSelector(getCartTotal);

  const processCheckout = async (ref: string) => {
    const orderedMeals = cart.map((meal) => {
      return { meal: meal._id, quantity: meal.quantity };
    });
    setLoading(true);
    const orderData = {
      deliveryInfo: {
        deliveryAddress,
        phoneNumber,
        deliveryAddressNumber,
      },
      orderedMeals,
      totalAmount: total,
      paymentReference: ref,
    };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}order`,
        orderData
      );
      console.log(data.data);
      console.log("order has been sent to backend");
      setLoading(false);
      handleOrderCompleted();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  // const handleSendingOrder = async (reference) => {
  //   setLoading(true);
  //   const orderData = {
  //     deliveryInfo: {
  //       deliveryAddress,
  //       phoneNumber,
  //       deliveryAddressNumber,
  //     },
  //     orderedMeals,
  //     totalAmount,
  //     paymentReference: reference,
  //   };
  //   try {
  //     const { data } = await axiosInstance.post("order", orderData);
  //     setLoading(false);
  //     console.log("order has been sent to backend");
  //     dispatch(resetCart());
  //     navigation.navigate("CheckoutSuccess");
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //     //show error message
  //   }
  // };
  return (
    <div className="mt-20 grid md:grid-cols-2 gap-14 font-montserrat">
      {/* delivery and billing details container */}
      <div>
        {/* <DeliveryMethod /> */}
        {/* form details to also be sent to backend */}
        <BillingDetails
          setDeliveryAddress={setDeliveryAddress}
          setPhoneNumber={setPhoneNumber}
          setDeliveryAddressNumber={setDeliveryAddressNumber}
        />
      </div>
      <div>
        <OrderDetails
          phoneNumber={phoneNumber}
          deliveryAddress={deliveryAddress}
          deliveryAddressNumber={deliveryAddressNumber}
          handleCheckOut={processCheckout}
        />
      </div>
      {loading && (
        <AuthLoader process="Do hold on while we process your order" />
      )}
    </div>
  );
}

export default Checkout;
