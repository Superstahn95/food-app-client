/* eslint-disable no-nested-ternary */
import { useEffect, useState } from "react";
import Container from "./Container";
import MealCard from "./MealCard";
import axios from "../utils/axios";
import ErrorRetry from "./ErrorRetry";

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
  const [isError, setIsError] = useState(false);
  const getMeals = async () => {
    setIsError(false);
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_GENERAL_API_ENDPOINT}meal`
      );
      setMeals(data.data.slice(0, 10));
      setLoading(false);
    } catch (error) {
      setIsError(true);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
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
      {isError ? (
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex flex-col justify-center items-center">
          <p className="text-white font-montserrat text-xl">
            An error occured trying to get featured meals from menu
          </p>
          <p className="text-white font-montserrat mb-3">
            Don&apos;t fret!!! Hold on a minute and try again
          </p>
          <ErrorRetry callback={getMeals} />
        </div>
      ) : (
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
            {loading ? (
              <p className="text-white">Fetching recent meals...</p>
            ) : meals.length < 1 ? (
              <div className="text-3xl text-white font-bold">
                No available meals{" "}
              </div>
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
      )}
    </div>
  );
}

export default RecentMeals;

// {meals.length < 1 ? (
//   <div className="text-3xl text-white font-bold">NO MEALS YET</div>
// ) : (
//   <div className="grid md:grid-cols-2 gap-4 my-7">
//     {meals.map((meal) => (
//       <MealCard
//         // eslint-disable-next-line no-underscore-dangle
//         key={meal._id}
//         name={meal.name}
//         price={meal.price}
//         imageAddress={meal.mealImage}
//         description={meal.description}
//       />
//     ))}
//   </div>
// )}
