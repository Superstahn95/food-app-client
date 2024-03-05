import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";

function SignUp() {
  const registerInitialValues = {
    firstname: "",
    lastname: "",
    number: "",
    email: "",
    password: "",
  };
  const loginInitialValues = {
    email: "",
    password: "",
  };
  return (
    <>
      <Navbar />
      <Container>
        <div className="mt-20 font-montserrat">
          <div className="flex flex-col md:flex-row space-y-5 md:space-x-10 md:space-y-0 justify-between md:py-20">
            {/* sign up div */}
            <div className="flex-1">
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
                  console.log(values);
                }}
              >
                <Form>
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
                      type="submit"
                      className="bg-yellow-600 text-white px-3 py-2"
                    >
                      LOGIN
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
            <div className="md:flex flex-col items-center  hidden">
              <div className="w-[1px] bg-yellow-500 h-[150px]" />
              <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center border border-yellow-600 text-yellow-600">
                Or
              </div>
              <div className="w-[1px] bg-yellow-500 h-[150px]" />
            </div>
            {/* log in div */}
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
                  firstname: Yup.string().required("Enter your first name"),
                  lastname: Yup.string().required("Enter your last name"),
                  number: Yup.string().required("Enter your phone number"),
                })}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                <Form>
                  <div className="mb-4">
                    <label htmlFor="firstname">First name</label>
                    <Field
                      name="firstname"
                      type="text"
                      className=" p-1 border border-black rounded-md outline-none w-full"
                      placeholder="First name"
                    />
                    <ErrorMessage
                      name="firstname"
                      render={(msg) => (
                        <div className="text-xs text-red-500">{msg}</div>
                      )}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="lastname">Last name</label>
                    <Field
                      name="lastname"
                      type="text"
                      className=" p-1 border border-black rounded-md outline-none w-full"
                      placeholder="Example@email.com"
                    />
                    <ErrorMessage
                      name="lastname"
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
                      type="submit"
                      className="bg-yellow-600 text-white px-3 py-2"
                    >
                      REGISTER
                    </button>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default SignUp;
// firstname, lastname, phone number, email address and password
