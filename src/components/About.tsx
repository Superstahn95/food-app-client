import Container from "./Container";
import axios from "axios";

function About() {
  const checkFunctionality = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:4000/api/v1/healthcheck"
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <div className="my-5 min-h-[60vh] flex items-center justify-center">
        <div className="grid md:grid-cols-5 w-[80%] gap-2">
          <div className="col-span-2">
            <div className="border-[10px]  border-yellow-600 w-[300px] h-[300px] rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/images/rice.jpg"
                alt="meal"
              />
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex items-center space-x-1 ">
              <div className="w-[30px] h-[1px] bg-yellow-600" />
              <h3 className=" text-yellow-600 text-2xl font-bold font-dancingScript">
                About Us
              </h3>
            </div>
            {/* change font style */}
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
              <li className="tracking-widest mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit.
              </li>
              <li className="tracking-widest mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit.
              </li>
              <li className="tracking-widest mt-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit.
              </li>
            </ul>
            <div className="mt-4">
              <button
                onClick={checkFunctionality}
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
