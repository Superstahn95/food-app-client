import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import Cart from "./pages/Cart";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/meals" element={<Meals />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;
