/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-underscore-dangle */
import Container from "./Container";
import { TCategory } from "../types";
import SkeletonElement from "./skeletons/SkeletonElement";

type ControllerProps = {
  loading: boolean;
  isSelected: string;
  categories: TCategory[];
  scrollToSection: (index: number) => void;
  handleSelectedCategory: (id: string) => void;
};

function CategoryController({
  loading,
  isSelected,
  categories,
  scrollToSection,
  handleSelectedCategory,
}: ControllerProps) {
  // categories will be fetched on mount of this component later on
  // to be commented out when categories has been created

  //  use a better loader component
  const handleClick = (index: number, id: string) => {
    handleSelectedCategory(id);
    scrollToSection(index);
  };
  return (
    <div className="bg-white sticky top-[70px]">
      <Container>
        {loading ? (
          <div className="flex  items-center flex-wrap justify-between    font-montserrat   md:max-w-[700px]">
            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
              <button type="button" disabled className="py-3">
                <SkeletonElement key={n} type="text" />
              </button>
            ))}
          </div>
        ) : (
          <div className="flex  items-center flex-wrap justify-between    font-montserrat   md:max-w-[700px]">
            {categories.map((category, index) => (
              <button
                key={category._id}
                className={`py-3 min-w-[50px] text-sm md:text-lg uppercase  cursor-pointer ${isSelected === category._id && "text-yellow-600 font-bold"}`}
                onClick={() => handleClick(index, category._id)}
                type="button"
              >
                {category.name}
              </button>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default CategoryController;
