import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartDetails from "../components/CartDetails";
import Container from "../components/Container";
import Checkout from "../components/Checkout";
import CartIndicator from "../components/CartIndicator";
import OrderComplete from "../components/OrderComplete";
import MobileCartIndicator from "../components/MobileCartIndicator";
import { useAppSelector } from "../app/hook";

function Cart() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const handleProceedToCheckOut = (): void => {
    setCurrentStep(2);
  };
  const handleGoBackToCart = (): void => {
    setCurrentStep(1);
  };
  const handleOrderCompleted = (): void => {
    setCurrentStep(3);
  };
  const { cart } = useAppSelector((state) => state.cart);
  const getCurrentStep = (): string => {
    if (currentStep === 1) {
      return "shopping cart";
    }
    if (currentStep === 2) {
      return "checkout";
    }
    return "order completed";
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 600);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <div className="mt-20">
          {cart.length < 1 ? (
            <div className="font-bold min-h-[70vh] font-montserrat space-y-2 flex flex-col items-center justify-center">
              <p className="text-2xl ">You have no items in your cart</p>
              <NavLink
                to="/meals"
                className="bg-yellow-600 text-white p-3 uppercase"
              >
                Go place some orders
              </NavLink>
            </div>
          ) : (
            <>
              {isMobile ? (
                <div className="w-[80%]  mx-auto  font-montserrat">
                  <MobileCartIndicator step={currentStep} />
                  <p className="text-center uppercase">{getCurrentStep()}</p>
                </div>
              ) : (
                <div className="w-[80%]  mx-auto flex items-center justify-center font-montserrat">
                  <div className="flex flex-col items-center">
                    <CartIndicator step={1} currentStep={currentStep} />
                    <span className="uppercase ">Shopping cart</span>
                  </div>
                  <div className="flex-1 h-[2px] bg-yellow-500" />
                  <div className="flex flex-col items-center">
                    <CartIndicator step={2} currentStep={currentStep} />
                    <span className="uppercase">checkout</span>
                  </div>
                  <div className="flex-1 h-[2px] bg-yellow-500" />
                  <div className="flex flex-col items-center">
                    <CartIndicator step={3} currentStep={currentStep} />
                    <span className="uppercase">order complete</span>
                  </div>
                </div>
              )}

              {currentStep === 1 && (
                <CartDetails onProceedToCheckOut={handleProceedToCheckOut} />
              )}
              {currentStep === 2 && <Checkout />}
              {currentStep === 3 && <OrderComplete />}
            </>
          )}
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Cart;
