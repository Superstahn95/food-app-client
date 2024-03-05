import Meal from "./Meal";

type MealData = {
  id: string;
  name: string;
  price: number;
  imageAddress: string;
};

type Props = {
  name: string;
  meals: MealData[];
};
function Category({ name, meals }: Props) {
  return (
    <div>
      <div className="flex items-center space-x-2">
        <div className="w-2 h-2 md:w-4 md:h-4 bg-yellow-600 rounded-full" />
        <h2 className="font-bold uppercase text-lg md:text-2xl text-yellow-600 font-montserrat py-3">
          {name}
        </h2>
      </div>
      {meals.map((meal) => (
        <Meal
          key={meal.id}
          id={meal.id}
          name={meal.name}
          price={meal.price}
          imageAddress={meal.imageAddress}
        />
      ))}
    </div>
  );
}

export default Category;
