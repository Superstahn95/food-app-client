import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuth } from "../hooks/useAuth";
import AuthLoader from "./AuthLoader";

function LoginForm() {
  const { loginUser, loginLoading } = useAuth();
  // navigate to home page if login successful
  const loginInitialValues = {
    email: "",
    password: "",
  };
  return (
    <div className="flex-1">
      {loginLoading && <AuthLoader process="Logging in" />}
      <h2 className="text-yellow-600 font-bold text-3xl ">Sign In</h2>
      <p className="py-3">Welcome back! Sign in to your account</p>
      <Formik
        initialValues={loginInitialValues}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Enter a valid email")
            .required("email is required"),
          password: Yup.string().required("Password is required"),
        })}
        onSubmit={(values) => {
          loginUser(values);
        }}
      >
        <Form>
          <div className="mb-4">
            <span>Email Address</span>
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
            <span>Password</span>
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
              type="submit"
              disabled={loginLoading}
              className="bg-yellow-600 text-white px-3 py-2"
            >
              {loginLoading ? "loading.." : "LOGIN"}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;
