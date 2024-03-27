import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../hooks/useAuth";

// import axiosInstance from "../utils/axios";

function SignUp() {
  const navigate = useNavigate();
  const { user } = useAuth();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  return (
    <>
      <Navbar />
      <Container>
        <div className="mt-20 font-montserrat">
          <div className="flex flex-col md:flex-row space-y-5 md:space-x-10 md:space-y-0 justify-between md:py-20">
            <LoginForm />
            <div className="md:flex flex-col items-center  hidden">
              <div className="w-[1px] bg-yellow-500 h-[150px]" />
              <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center border border-yellow-600 text-yellow-600">
                Or
              </div>
              <div className="w-[1px] bg-yellow-500 h-[150px]" />
            </div>
            <RegisterForm />
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default SignUp;
