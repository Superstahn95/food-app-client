import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

function FooterContact() {
  return (
    <div>
      <h2 className="font-niconne text-xl font-bold">Contact Us</h2>
      <ul className="font-montserrat my-5">
        <li className="flex items-center space-x-2 py-2">
          <FaLocationDot />
          <span>+2348101891481</span>
        </li>
        <li className="flex items-center space-x-2 py-2">
          <IoCall />
          <span>Lorem ipsum dolor sit amet.</span>
        </li>
      </ul>
    </div>
  );
}

export default FooterContact;
