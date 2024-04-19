import {
  createContext,
  useState,
  ReactNode,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

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
  refetchUserOnRefresh: () => void;
}

export const AuthContext = createContext<AuthContextType | null>(null);

function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loginLoading, setLoginLoading] = useState(false);
  const [registerLoading, setRegisterLoading] = useState(false);
  const registerUser = useCallback(async (userDetails: RegisterData) => {
    setRegisterLoading(true);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}auth/register`,
        userDetails,
        {
          withCredentials: true,
        }
      );
      setUser(data.data);
      setRegisterLoading(false);
    } catch (err: any) {
      setError(err.response.data.message);
      setRegisterLoading(false);
    }
  }, []);

  const loginUser = useCallback(async (userDetails: LoginData) => {
    setLoginLoading(true);
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}auth/login`,
        userDetails,
        {
          withCredentials: true,
        }
      );
      const { token } = data.data;
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
      setUser(data.data.user);
      setLoginLoading(false);
    } catch (err: any) {
      setError(err.response.data.message);
      setLoginLoading(false);
    }
  }, []);
  const refetchUserOnRefresh = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}auth/refetch`,
        {
          withCredentials: true,
        }
      );
      axios.defaults.headers.common.Authorization = data.data.token;
      setUser(data.data.user);
    } catch (error: any) {
      console.log(error);
    }
  }, []);
  const logout = useCallback(() => {
    setUser(null);
  }, []);

  const authContextValue = useMemo<AuthContextType>(
    () => ({
      user,
      error,
      loginLoading,
      registerLoading,
      setError,
      loginUser,
      registerUser,
      logout,
      refetchUserOnRefresh,
    }),
    [
      user,
      error,
      loginLoading,
      registerLoading,
      setError,
      loginUser,
      registerUser,
      logout,
      refetchUserOnRefresh,
    ]
  );
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
}

export default AuthProvider;
