/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-underscore-dangle */

type BillingProps = {
  setDeliveryAddress: React.Dispatch<React.SetStateAction<string>>;
  setDeliveryAddressNumber: React.Dispatch<React.SetStateAction<string>>;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
};

function BillingDetails({
  setDeliveryAddress,
  setDeliveryAddressNumber,
  setPhoneNumber,
}: BillingProps) {
  return (
    <div className="font-montserrat">
      <h2 className="uppercase font-bold text-xl ">Billing Details</h2>

      <form className="my-5">
        {/* use formik for this form */}

        <div className="mb-3 flex flex-col">
          <label htmlFor="phoneNumber">Mobile number</label>
          <input
            type="text"
            className=" p-1 border border-black rounded-md outline-none"
            placeholder="Enter receiver mobile number"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="phoneNumber">Delivery address</label>
          <input
            type="text"
            className=" p-1 border border-black rounded-md outline-none"
            placeholder="Enter delivery address"
            onChange={(e) => setDeliveryAddress(e.target.value)}
          />
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="phoneNumber">Delivery address number</label>
          <input
            type="text"
            className=" p-1 border border-black rounded-md outline-none"
            placeholder="Enter delivery address number"
            onChange={(e) => setDeliveryAddressNumber(e.target.value)}
          />
        </div>
      </form>

      {/* </FormikProvider> */}
    </div>
  );
}

export default BillingDetails;
