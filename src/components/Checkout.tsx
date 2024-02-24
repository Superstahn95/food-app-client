import BillingDetails from "./BillingDetails";
import OrderDetails from "./OrderDetails";

function Checkout() {
  return (
    <div className="mt-20 grid grid-cols-2 gap-14 font-montserrat">
      {/* delivery and billing details container */}
      <div>
        {/* this can be extracted into its own component */}
        <div>
          <h2 className="uppercase font-bold text-xl">Delivery method</h2>
          <div className="flex items-center justify-center space-x-3  w-fit my-4">
            <button
              type="button"
              className="flex items-center space-x-2 border border-black p-2"
            >
              <div className="w-4 h-4 rounded-full border border-black" />
              <span>Delivery</span>
            </button>
            <button
              type="button"
              className="flex items-center space-x-2 border border-black p-2"
            >
              <div className="w-4 h-4 rounded-full border border-black " />
              <span>Pick up</span>
            </button>
          </div>
        </div>
        <BillingDetails />
      </div>
      <div>
        <OrderDetails />
      </div>
    </div>
  );
}

export default Checkout;
