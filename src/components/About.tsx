import Container from "./Container";

function About() {
  return (
    <Container>
      <div className="my-5 min-h-[60vh] 2xl:min-h-[40vh] flex items-center justify-center">
        <div className="flex space-x-3 flex-wrap ">
          <div className="flex-1 flex justify-center md:justify-end ">
            <div className="border-[10px] w-[300px] h-[300px]  border-yellow-600  rounded-full overflow-hidden">
              <img
                // className="w-full h-full object-cover"
                className="w-[300px] h-[300px] object-cover"
                src="/images/rice.jpg"
                alt="meal"
              />
            </div>
          </div>
          <div className="flex-[2]">
            <div className="flex items-center space-x-1 ">
              <div className="w-[30px] h-[1px] bg-yellow-600" />
              <h3 className=" text-yellow-600 text-2xl font-bold font-dancingScript">
                About Us
              </h3>
            </div>
            <h2 className="font-bold text-5xl tracking-wider font-niconne text-slate-700">
              We make the best dishes{" "}
            </h2>
            <h2 className="font-bold text-5xl tracking-wider font-niconne text-slate-700">
              In your town{" "}
            </h2>
            <p className="font-montserrat leading-loose">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              reiciendis corporis maxime repellat minima beatae similique ex
              iusto, voluptate ad. Deserunt error consequatur blanditiis
              consequuntur maxime, repellendus explicabo vitae eius ipsa
              praesentium, aspernatur numquam enim tempore, eos culpa labore?
              Aut.
            </p>
            <ul className="font-montserrat list-disc text-slate-700 ml-4">
              <li className=" mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit.
              </li>
              <li className=" mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit.
              </li>
              <li className=" mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit.
              </li>
            </ul>
            <div className="mt-4">
              <button
                type="button"
                className="bg-yellow-600 text-white py-2 px-3 rounded-md capitalize font-bold"
              >
                Contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default About;
