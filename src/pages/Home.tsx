import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import RecentMeals from "../components/RecentMeals";
import Team from "../components/Team";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <RecentMeals />
      <Team />
      <Footer />
    </>
  );
}

export default Home;
