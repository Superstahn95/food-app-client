function BillingDetails() {
  // steadily have a mobile Number, street/ estate address and a house number
  // first name, last name, email, password
  // additional information
  return (
    <div className="font-montserrat">
      <h2 className="uppercase font-bold text-xl ">Billing Details</h2>
      <form className="my-5">
        {/* use formik for this form */}
        <div className="mb-3 flex flex-col">
          <label htmlFor="first-name">First name</label>
          <input
            type="text"
            id="first-name"
            className=" p-1 border border-black rounded-md outline-none"
          />
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="last-name">Last name</label>
          <input
            type="text"
            id="last-name"
            className=" p-1 border border-black rounded-md outline-none"
          />
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className=" p-1 border border-black rounded-md outline-none"
          />
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            id="password"
            className=" p-1 border border-black rounded-md outline-none"
          />
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="number">Mobile number</label>
          <input
            type="text"
            id="number"
            className=" p-1 border border-black rounded-md outline-none"
          />
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="address">Street/estate address</label>
          <input
            type="text"
            id="address"
            className=" p-1 border border-black rounded-md outline-none"
          />
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="house-number">House number</label>
          <input
            type="text"
            id="house-number"
            className=" p-1 border border-black rounded-md outline-none"
          />
        </div>
      </form>
    </div>
  );
}

export default BillingDetails;
