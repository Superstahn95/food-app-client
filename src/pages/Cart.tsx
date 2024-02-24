import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartDetails from "../components/CartDetails";
import Container from "../components/Container";
import Checkout from "../components/Checkout";
import CartIndicator from "../components/CartIndicator";
import OrderComplete from "../components/OrderComplete";

function Cart() {
  const [currentStep, setCurrentStep] = useState(1);
  const handleProceedToCheckOut = (): void => {
    setCurrentStep(2);
  };
  const handleGoBackToCart = (): void => {
    setCurrentStep(1);
  };
  const handleOrderCompleted = (): void => {
    setCurrentStep(3);
  };

  return (
    <>
      <Navbar />
      <Container>
        <div className="mt-20">
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

          {currentStep === 1 && (
            <CartDetails onProceedToCheckOut={handleProceedToCheckOut} />
          )}
          {currentStep === 2 && <Checkout />}
          {currentStep === 3 && <OrderComplete />}
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default Cart;
