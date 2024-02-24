function OrderDetails() {
  return (
    <div>
      <h2 className="uppercase font-bold text-xl ">Order details</h2>
      <div className="mt-5 bg-yellow-600 py-7 px-4">
        {/* orders */}
        <div className="flex items-center justify-between text-white mb-2">
          <span>1x Fried rice</span>
          <span>20000</span>
        </div>
        <div className="flex items-center justify-between text-white mb-2">
          <span>1x Fried rice</span>
          <span>20000</span>
        </div>
        <div className="flex items-center justify-between text-white mb-2">
          <span>1x Fried rice</span>
          <span>20000</span>
        </div>
        {/* subtotal */}
        <div className="flex items-center justify-between text-white border-t border-white py-2 mb-2">
          <span>Subtotal</span>
          <span>60000</span>
        </div>
        <div className="flex items-center justify-between text-white border-t border-white py-2 mb-2">
          <span>Delivery</span>
          <span>0</span>
        </div>
        <div className="flex items-center justify-between text-white border-t border-white py-2 mb-2">
          <span>Order total</span>
          <span>60000</span>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="bg-white text-yellow-600 uppercase font-bold w-[150px] py-2 flex items-center justify-center"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
