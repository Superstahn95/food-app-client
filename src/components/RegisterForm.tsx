import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axiosInstance from "../utils/axios";
import { useAuth } from "../hooks/useAuth";

function RegisterForm() {
  const { registerUser, registerLoading } = useAuth();
  const registerInitialValues = {
    firstName: "",
    lastName: "",
    number: "",
    email: "",
    password: "",
  };
  return (
    <div className="flex-1">
      <h2 className="text-yellow-600 font-bold text-3xl ">
        Create new account
      </h2>
      <p className="py-3">Create your very own EatWithUs Account</p>
      <Formik
        initialValues={registerInitialValues}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Enter a valid email")
            .required("email is required"),
          password: Yup.string()
            .required("Password is required")
            .min(6, "Enter a minimum of 6 characters"),
          firstName: Yup.string().required("Enter your first name"),
          lastName: Yup.string().required("Enter your last name"),
          number: Yup.string().required("Enter your phone number"),
        })}
        onSubmit={(values) => {
          console.log(values);
          registerUser(values);
        }}
      >
        <Form>
          <div className="mb-4">
            <label htmlFor="firstName">First name</label>
            <Field
              name="firstName"
              type="text"
              className=" p-1 border border-black rounded-md outline-none w-full"
              placeholder="First name"
            />
            <ErrorMessage
              name="firstName"
              render={(msg) => (
                <div className="text-xs text-red-500">{msg}</div>
              )}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="lastName">Last name</label>
            <Field
              name="lastName"
              type="text"
              className=" p-1 border border-black rounded-md outline-none w-full"
              placeholder="Example@email.com"
            />
            <ErrorMessage
              name="lastName"
              render={(msg) => (
                <div className="text-xs text-red-500">{msg}</div>
              )}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email Address</label>
            <Field
              name="email"
              type="text"
              className=" p-1 border border-black rounded-md outline-none w-full"
              placeholder="Example@email.com"
            />
            <ErrorMessage
              name="email"
              render={(msg) => (
                <div className="text-xs text-red-500">{msg}</div>
              )}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="number">Phone number</label>
            <Field
              name="number"
              type="text"
              className=" p-1 border border-black rounded-md outline-none w-full"
              placeholder="First name"
            />
            <ErrorMessage
              name="number"
              render={(msg) => (
                <div className="text-xs text-red-500">{msg}</div>
              )}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email">Password</label>
            <Field
              name="password"
              type="text"
              className=" p-1 border border-black rounded-md outline-none w-full"
              placeholder="Password*"
            />
            <ErrorMessage
              name="password"
              render={(msg) => (
                <div className="text-xs text-red-500">{msg}</div>
              )}
            />
          </div>
          <div>
            <button
              disabled={registerLoading}
              type="submit"
              className="bg-yellow-600 text-white px-3 py-2"
            >
              {registerLoading ? "loading..." : "REGISTER"}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default RegisterForm;
