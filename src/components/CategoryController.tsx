import { useEffect, useState } from "react";
import { categories } from "../assets/data";
import Container from "./Container";
import axiosInstance from "../utils/axios";
import { TMeal } from "./RecentMeals";

export type TCategory = {
  meals: TMeal[];
  _id: string;
  name: string;
};

function CategoryController() {
  // categories will be fetched on mount of this component later on
  // to be commented out when categories has been created
  // const [categories, setCategories] = useState<TCategory[]>([])
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    //fetch categories from server
    const getCategories = async () => {
      setLoading(true);
      const { data } = await axiosInstance.get("category");
      console.log(data);
      // setCategories(data.data)
      setLoading(false);
    };
    getCategories();
  }, []);
  return (
    <div className="bg-white">
      <Container>
        <ul className="flex  items-center flex-wrap justify-between   md:space-x-4 font-montserrat text-lg md:text-xl uppercase  md:max-w-[700px]">
          {categories.map((category) => (
            <li
              key={category.id}
              className="text-sm   py-3 min-w-[50px] md:text-lg"
            >
              {category.name}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default CategoryController;
