import { useEffect, useState } from "react";
import Container from "./Container";
import MealCard from "./MealCard";
import axios from "../utils/axios";
// import meals from "../assets/data";

export type TMeal = {
  _id: string;
  category: string;
  cloudinary_id: string;
  createdAt: string;
  description: string;
  mealImage: string;
  name: string;
  price: number;
};

function RecentMeals() {
  //  we will definitely fetch meals here
  const [meals, setMeals] = useState<TMeal[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getMeals = async () => {
      setLoading(true);
      const { data } = await axios.get(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}meal`
      );
      setMeals(data.data.slice(0, 10));
      setLoading(false);
    };
    getMeals();
  }, []);
  return (
    <div
      className="min-h-[50vh] relative"
      style={{
        backgroundImage: `url(/images/apples.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60" />
        <div className="flex flex-col relative items-center py-3 z-[50]">
          <div className="flex items-center space-x-1">
            <div className="w-[30px] h-[1px] bg-yellow-600" />
            <h2 className="text-yellow-600 font-niconne text-3xl">
              Tasty and Crunchy
            </h2>
            <div className="w-[30px] h-[1px] bg-yellow-600" />
          </div>
          <h1 className="text-5xl font-niconne text-white capitalize my-2">
            Our Main meals
          </h1>
          {meals.length < 1 ? (
            <div className="text-3xl text-white font-bold">NO MEALS YET</div>
          ) : (
            <div className="grid md:grid-cols-2 gap-4 my-7">
              {meals.map((meal) => (
                <MealCard
                  // eslint-disable-next-line no-underscore-dangle
                  key={meal._id}
                  name={meal.name}
                  price={meal.price}
                  imageAddress={meal.mealImage}
                  description={meal.description}
                />
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default RecentMeals;
