function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url(/images/pizza.jpg)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className="min-h-[80vh] relative"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl md:text-5xl 2xl:text-7xl font-montserrat text-white capitalize font-bold">
            <span className="text-yellow-600">healthy</span> and{" "}
            <span className="text-yellow-600">tasty</span> meals
          </h1>
          <h1 className="text-2xl md:text-5xl 2xl:text-7xl font-montserrat text-white capitalize font-bold">
            for healthy living
          </h1>
          <p className="font-montserrat text-white text-center mx-auto text-sm md:text-lg md:leading-loose w-[80%] md:w-[40%] ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, quos odit officiis temporibus voluptatibus perferendis
            culpa est iusto magni dolor?
          </p>
          <div className="my-3">
            <button
              type="button"
              className="w-[12rem] h-[3rem] py-3 px-4 rounded-md bg-yellow-600 text-white font-bold font-montserrat capitalize"
            >
              Start ordering
            </button>
          </div>
        </div>
        <div />
      </div>
    </div>
  );
}

export default Hero;
