import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import CategoryController from "../components/CategoryController";
import Category from "../components/Category";
import CartSlider from "../components/CartSlider";
import { categories } from "../assets/data";

function Meals() {
  return (
    <>
      <Navbar />
      <div className="min-h-[40vh] mt-20">
        <CategoryController />
        <Container>
          {categories.map((category) => (
            <Category
              key={category.id}
              name={category.name}
              meals={category.meals}
            />
          ))}
        </Container>
        <CartSlider />
      </div>
      <Footer />
    </>
  );
}

export default Meals;
