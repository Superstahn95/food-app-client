import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { PiBowlFoodFill } from "react-icons/pi";

const socials = [
  { id: "1", icon: <FaInstagram size={25} /> },
  { id: "1", icon: <FaTwitter size={25} /> },
  { id: "1", icon: <FaFacebook size={25} /> },
  { id: "1", icon: <FaLinkedin size={25} /> },
];

function FooterDescription() {
  return (
    <div className="text-white">
      <div className="flex items-center space-x-1">
        <PiBowlFoodFill className="w-7 h-7 text-yellow-600" />
        <h2 className="font-bold font-niconne text-lg">Backyard Bowl</h2>
      </div>
      <p className="text-sm font-montserrat leading-loose tracking-wide my-5 py-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
        aspernatur nisi inventore ullam? Ipsam fugiat maxime suscipit eveniet at
        animi.
      </p>
      <div className="flex items-center space-x-2 my-2">
        {socials.map((social) => (
          <div
            key={social.id}
            className="p-1 border border-yellow-500 rounded-md cursor-pointer"
          >
            {social.icon}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FooterDescription;
