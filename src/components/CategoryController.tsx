import { categories } from "../assets/data";
import Container from "./Container";

function CategoryController() {
  // categories will be fetched on mount of this component later on
  return (
    <div className="bg-white">
      <Container>
        <ul className="flex items-center flex-wrap space-x-4 font-montserrat text-xl uppercase">
          {categories.map((category) => (
            <li key={category.id} className=" py-3">
              {category.name}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}

export default CategoryController;
