import Meal from "./Meal";
import { TMeal } from "./RecentMeals";

type Props = {
  _id: string;
  name: string;
  meals: TMeal[];
};
function Category({ name, meals, _id }: Props) {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 md:w-4 md:h-4 bg-yellow-600 rounded-full" />
        <h2 className="font-bold uppercase text-lg md:text-2xl text-yellow-600 font-montserrat py-3">
          {name}
        </h2>
      </div>
      {meals && meals.length === 0 ? (
        <div className="font-montserrat text-[20px] py-4 mb-4 border-b border-black/60 max-w-[700px] ">
          There are no available {name}
        </div>
      ) : (
        meals.map((meal) => (
          <Meal
            key={meal._id}
            _id={meal._id}
            name={meal.name}
            price={meal.price}
            mealImage={meal.mealImage}
            category={meal.category}
            cloudinary_id={meal.cloudinary_id}
            createdAt={meal.createdAt}
            description={meal.description}
          />
        ))
      )}
    </div>
  );
}

export default Category;
