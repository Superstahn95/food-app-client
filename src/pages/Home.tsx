import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import RecentMeals from "../components/RecentMeals";
import Team from "../components/Team";
import Footer from "../components/Footer";

function Home() {
  // const accessProtectedRoute = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       `${import.meta.env.VITE_GENERAL_API_ENDPOINT}auth/protected`
  //     );
  //     console.log(data);
  //   } catch (error) {
  //     console.log("error accessing protected route");
  //     console.log(error);
  //   }
  // };
  // const hitRefreshToken = async () => {
  //   try {
  //     const { data } = await axios.post(
  //       `${import.meta.env.VITE_GENERAL_API_ENDPOINT}auth/refresh-token`,
  //       {}
  //     );
  //     console.log(data);
  //   } catch (error) {
  //     console.log("we have an error in refreshing access token");
  //     console.log(error);
  //   }
  // };
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <RecentMeals />
      <Team />
      {/* <div className="flex items-center space-x-4">
        <button
          type="button"
          onClick={accessProtectedRoute}
          className="bg-red-500 text-white p-3"
        >
          Access protected route
        </button>
        <button
          type="button"
          onClick={hitRefreshToken}
          className="bg-green-500 text-white p-3"
        >
          Refresh token route
        </button>
      </div> */}
      <Footer />
    </>
  );
}

export default Home;
