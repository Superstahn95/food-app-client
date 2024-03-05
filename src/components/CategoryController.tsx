import { categories } from "../assets/data";
import Container from "./Container";

function CategoryController() {
  // categories will be fetched on mount of this component later on
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
