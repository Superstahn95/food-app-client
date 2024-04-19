/* eslint-disable no-underscore-dangle */
import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import Cart from "./pages/Cart";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/SignUp";
import { useAuth } from "./hooks/useAuth";

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalConfig = error.config;
    if (error.response) {
      if (error.response.status === 401 && !originalConfig?._retry) {
        originalConfig._retry = true;
        // call refresh token endpoint;
        const { data } = await axios.post(
          `${import.meta.env.VITE_GENERAL_API_ENDPOINT}auth/refresh-token`,
          {}
        );
        const { token } = data.data;
        originalConfig.headers.Authorization = `Bearer ${token}`;
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
        return axios(originalConfig);
      }
    }
    // throw error;
    return Promise.reject(error);
  }
);

function App() {
  const { refetchUserOnRefresh, user } = useAuth();
  useEffect(() => {
    if (!user) {
      refetchUserOnRefresh();
    }
  }, [refetchUserOnRefresh, user]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meals" element={<Meals />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
