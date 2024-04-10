import { createContext, useState, ReactNode, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axiosInstance from "../utils/axios";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  number: string;
  password: string;
}
interface LoginData {
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  error: string | null;
  loginLoading: boolean;
  registerLoading: boolean;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  loginUser: (userDetails: LoginData) => void;
  registerUser: (userDetails: RegisterData) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loginLoading, setLoginLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const registerUser = async (userDetails: RegisterData) => {
    setRegisterLoading(true);
    try {
      const { data } = await axiosInstance.post("auth/register", userDetails, {
        withCredentials: true,
      });
      setUser(data.data);
      setRegisterLoading(false);
    } catch (error: any) {
      setError(error.response.data.message);
      setRegisterLoading(false);
    }
  };
  const loginUser = async (userDetails: LoginData) => {
    setLoginLoading(true);
    try {
      const { data } = await axiosInstance.post("auth/login", userDetails, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      console.log(data);
      const token = data.data.token;
      axiosInstance.defaults.headers.common["Authorization"] =
        `Bearer ${token}`;
      setUser(data.data.user);
      setLoginLoading(false);
    } catch (error: any) {
      console.log("we are here in the error catch block");
      console.log(error);
      setError(error.response.data.message);
      setLoginLoading(false);
    }
  };
  const logout = () => {
    setUser(null);
  };
  const authContextValue: AuthContextType = {
    user,
    error,
    loginLoading,
    registerLoading,
    setError,
    loginUser,
    registerUser,
    logout,
  };
  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setError(null);
    }
  }, [error]);
  return (
    <AuthContext.Provider value={authContextValue}>
      <ToastContainer />
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
