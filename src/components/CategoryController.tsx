import Container from "./Container";
import { TCategory } from "../pages/Meals";

type ControllerProps = {
  loading: boolean;
  categories: TCategory[];
};

function CategoryController({ loading, categories }: ControllerProps) {
  // categories will be fetched on mount of this component later on
  // to be commented out when categories has been created

  //  use a better loader component
  return (
    <div className="bg-white">
      <Container>
        {loading ? (
          <p>Fetching categories</p>
        ) : (
          <ul className="flex  items-center flex-wrap justify-between   md:space-x-4 font-montserrat text-lg md:text-xl uppercase  md:max-w-[700px]">
            {categories.map((category) => (
              <li
                key={category._id}
                className="text-sm   py-3 min-w-[50px] md:text-lg"
              >
                {category.name}
              </li>
            ))}
          </ul>
        )}
      </Container>
    </div>
  );
}

export default CategoryController;
