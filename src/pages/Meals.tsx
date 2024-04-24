/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-return-assign */
import { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import CategoryController from "../components/CategoryController";
import Category from "../components/Category";
import CartSlider from "../components/CartSlider";
// import { categories } from "../assets/data";
import axiosInstance from "../utils/axios";
import { TCategory } from "../types";

// to do this later
// consider sticky category controller here when scrolling to that section of the page
function Meals() {
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [stickyHeight, setStickyHeight] = useState<number>(0);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const categoryRefs = useRef<HTMLDivElement[]>([]);
  const categoryControllerRef = useRef<HTMLDivElement | null>(null);
  // const buttonRef = useRef<HTMLButtonElement | null>(null);
  // const handleCategoryRef = (ref: HTMLDivElement | null, index: number) => {
  //   categoryRefs.current[index] = ref;
  // };
  const handleSelectedCategory = (id: string) => {
    setSelectedCategoryId(id);
  };

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      try {
        const { data } = await axiosInstance.get("category");
        setCategories(data.data);
        setSelectedCategoryId(data.data[0]._id);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    getCategories();
  }, []);
  useEffect(() => {
    if (categoryControllerRef.current) {
      const height = categoryControllerRef.current.clientHeight;
      setStickyHeight(height);
    }
  }, []);
  const handleCategoryClick = (index: number) => {
    // const topOffset = element.offsetTop - stickyHeight;
    if (categoryRefs.current[index]) {
      // const topOffset = categoryRefs.current[index].offsetTop - stickyHeight;
      // categoryRefs.current[index].scrollTo({
      //   top: topOffset,
      //   behavior: "smooth",
      // });
      categoryRefs.current[index].scrollIntoView({ behavior: "smooth" });
      // categoryRefs.current[index].scrollTo({
      //   top: 300,
      //   behavior: "smooth",
      // });
      // buttonRef.current?.scrollTo({
      //   top: 700,
      //   behavior: "smooth",
      // });
    }
  };
  const handleScroll = (id: string) => {
    setSelectedCategoryId(id);
  };

  return (
    <>
      <Navbar />
      <div ref={categoryControllerRef} className="min-h-[40vh] mt-20">
        <CategoryController
          loading={loading}
          categories={categories}
          scrollToSection={handleCategoryClick}
          isSelected={selectedCategoryId}
          handleSelectedCategory={handleSelectedCategory}
        />
        <Container>
          {categories.map((category, index) => (
            <Category
              key={category._id}
              name={category.name}
              meals={category.meals}
              _id={category._id}
              categoryRef={(ref) => (categoryRefs.current[index] = ref)}
              onScrollIntoView={() => handleScroll(category._id)}
            />
          ))}
        </Container>
        <CartSlider />
      </div>
      {/* <button
        ref={buttonRef}
        type="button"
        className="bg-red-500 text-white p-4 rounded-md font-bold"
      >
        Check the scroll
      </button> */}
      <Footer />
    </>
  );
}

export default Meals;
