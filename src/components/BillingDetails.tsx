import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuth } from "../hooks/useAuth";
import FormikProvider from "../context/formikContext";
import { useFormikContext } from "../hooks/useFormikContext";
import axiosInstance from "../utils/axios";
import { useAppSelector, useAppDispatch } from "../app/hook";
import { getCartTotal } from "../features/cart/cartSlice";

type FormField = {
  name: string;
  label: string;
  placeholder: string;
};

type FormData = {
  deliveryAddress: string;
  deliveryAddressNumber: string;
  phoneNumber: string;
};

function BillingDetails() {
  // the below is to be changed with original user state of the application
  const { cart } = useAppSelector((state) => state.cart);
  const totalAmount = useAppSelector(getCartTotal);
  const { user, registerUser, registerLoading } = useAuth();
  const { formikRef } = useFormikContext();
  // const userBillingInitialValues = {
  //   number: "",
  //   address: "",
  //   houseNumber: "",
  // };
  const userBillingInitialValues = {
    phoneNumber: "",
    deliveryAddress: "",
    deliveryAddressNumber: "",
  };
  const guestBillingInitialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    number: "",
    address: "",
    houseNumber: "",
  };
  //send cart items to backend if user exists
  const processCheckout = async (formData: FormData) => {
    const orderedMeals = cart.map((meal) => {
      return { meal: meal._id, quantity: meal.quantity };
    });
    try {
      const { data } = await axiosInstance.post(
        "payment/create-checkout-session",
        { orderedMeals, totalAmount, deliveryInfo: formData }
      );
      console.log(data.data);
      // window.location.href = data.data;
      const paymentWindow = window.open(data.data);
      if (paymentWindow) {
        const interval = setInterval(() => {
          if (paymentWindow.closed) {
            window.location.href = "/meals";
            console.log("window closed");
            clearInterval(interval);
          }
        }, 1000);
      } else {
        console.log("Unable to open payment window");
      }
    } catch (error) {
      //handle error in a better way
      console.log(error);
    }
  };

  const guestValidationSchema = Yup.object({
    firstName: Yup.string().required("first name is  required"),
    lastName: Yup.string().required("last name is required"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    phoneNumber: Yup.string().required("Phone number is required"),
    deliveryAddress: Yup.string().required("Delivery address is required"),
    deliveryAddressNumber: Yup.string().required("House number is required"),
  });

  const userValidationSchema = Yup.object({
    phoneNumber: Yup.string().required("Phone number is required"),
    deliveryAddress: Yup.string().required("Delivery address is required"),
    deliveryAddressNumber: Yup.string().required("Address number is required"),
  });

  const guestFields: FormField[] = [
    {
      label: "First name",
      name: "firstName",
      placeholder: "Enter your first name*",
    },
    {
      label: "Last name",
      name: "lastName",
      placeholder: "Enter your last name*",
    },
    { label: "Email", name: "email", placeholder: "Enter your email*" },
    {
      label: "Password",
      name: "password",
      placeholder: "Enter your password*",
    },
    {
      label: "Mobile number",
      name: "phoneNumber",
      placeholder: "Enter your mobile number*",
    },
    {
      label: "Delivery address",
      name: "deliveryAddress",
      placeholder: "Enter delivery address*",
    },
    {
      label: "Delivery address number",
      name: "deliveryAddressNumber",
      placeholder: "Enter delivery address number*",
    },
  ];
  const userFields: FormField[] = [
    {
      label: "Mobile number",
      name: "phoneNumber",
      placeholder: "Enter your mobile number*",
    },
    {
      label: "Delivery address",
      name: "deliveryAddress",
      placeholder: "Enter delivery address*",
    },
    {
      label: "Delivery address number",
      name: "deliveryAddressNumber",
      placeholder: "Enter delivery address number*",
    },
  ];
  const formFields: FormField[] = user ? userFields : guestFields;

  return (
    <div className="font-montserrat">
      <h2 className="uppercase font-bold text-xl ">Billing Details</h2>
      {/* <FormikProvider> */}
      <Formik
        innerRef={formikRef}
        initialValues={
          user ? userBillingInitialValues : guestBillingInitialValues
        }
        validationSchema={user ? userValidationSchema : guestValidationSchema}
        onSubmit={(values) => {
          // console.log(values);
          user ? processCheckout(values) : registerUser(values);
        }}
      >
        <Form className="my-5">
          {/* use formik for this form */}
          {formFields.map((field) => (
            <div className="mb-3 flex flex-col">
              <label htmlFor={field.name}>{field.label}</label>
              <Field
                name={field.name}
                type={field.name === "email" ? "email" : "text"}
                className=" p-1 border border-black rounded-md outline-none"
                placeholder={field.placeholder}
              />
              <ErrorMessage
                name={field.name}
                render={(msg) => (
                  <div className="text-xs text-red-500">{msg}</div>
                )}
              />
            </div>
          ))}
        </Form>
      </Formik>
      {/* </FormikProvider> */}
    </div>
  );
}

export default BillingDetails;
