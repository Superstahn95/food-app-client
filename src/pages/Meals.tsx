import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import CategoryController from "../components/CategoryController";
import Category from "../components/Category";
import CartSlider from "../components/CartSlider";
import { categories } from "../assets/data";
import axiosInstance from "../utils/axios";

function Meals() {
  //fetch categories here and pass it into the category controller and the Category component
  useEffect(() => {
    const getCategories = async () => {
      const { data } = await axiosInstance.get("category");
      console.log(data.data);
    };
    getCategories();
  }, []);
  return (
    <>
      <Navbar />
      <div className="min-h-[40vh] mt-20">
        <CategoryController />
        <Container>
          {categories.map((category) => (
            <Category
              key={category.id}
              name={category.name}
              meals={category.meals}
            />
          ))}
        </Container>
        <CartSlider />
      </div>
      <Footer />
    </>
  );
}

export default Meals;
