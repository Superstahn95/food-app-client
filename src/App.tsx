import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import Cart from "./pages/Cart";
import "react-toastify/dist/ReactToastify.css";
import SignUp from "./pages/SignUp";

function App() {
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
