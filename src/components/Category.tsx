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
      <h2 className="font-bold uppercase text-2xl text-yellow-600 font-montserrat py-3">
        {name}
      </h2>
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
