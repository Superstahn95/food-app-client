import { LuSoup } from "react-icons/lu";
import { FaBowlRice, FaWineBottle } from "react-icons/fa6";
import { PiHamburgerLight } from "react-icons/pi";
import Container from "./Container";
import ServiceCard from "./ServiceCard";

type Service = {
  id: string;
  service: string;
  icon: JSX.Element;
  bgColor: string;
};

function Services() {
  // fetch categories here
  const services: Service[] = [
    {
      id: "1",
      service: "Bit cooking",
      icon: <LuSoup size={30} />,
      bgColor: "bg-yellow-600",
    },
    {
      id: "2",
      service: "Home Service",
      icon: <FaBowlRice size={30} />,
      bgColor: "bg-slate-600",
    },
    {
      id: "3",
      service: "Delivery",
      icon: <PiHamburgerLight size={30} />,
      bgColor: "bg-blue-400",
    },
    {
      id: "4",
      service: "Bulk cooking",
      icon: <FaWineBottle size={30} />,
      bgColor: "bg-red-400",
    },
  ];
  return (
    <Container>
      {" "}
      <div className="mx-4 py-4 grid md:grid-cols-4 gap-2 md:mx-0 md:gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service.service}
            icon={service.icon}
            bgColor={service.bgColor}
          />
        ))}
      </div>
    </Container>
  );
}

export default Services;
