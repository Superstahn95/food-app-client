import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import CategoryController from "../components/CategoryController";
import Category from "../components/Category";
import CartSlider from "../components/CartSlider";
// import { categories } from "../assets/data";
import axiosInstance from "../utils/axios";
import { TMeal } from "../components/RecentMeals";

export type TCategory = {
  meals: TMeal[];
  _id: string;
  name: string;
};

function Meals() {
  //fetch categories here and pass it into the category controller and the Category component
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      try {
        const { data } = await axiosInstance.get("category");
        console.log(data.data);
        setCategories(data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getCategories();
  }, []);
  return (
    <>
      <Navbar />
      <div className="min-h-[40vh] mt-20">
        <CategoryController loading={loading} categories={categories} />
        <Container>
          {categories.map((category) => (
            <Category
              key={category._id}
              name={category.name}
              meals={category.meals}
              _id={category._id}
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
