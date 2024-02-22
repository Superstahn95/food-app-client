import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

type Socials = {
  instagram: string;
  twitter: string;
  facebook: string;
  linkedIn: string;
};
type Props = {
  imageAddress: string;
  name: string;
  socials: Socials;
  post: string;
};
function MemberCard({ imageAddress, socials, name, post }: Props) {
  return (
    <div className="border-[10px] cursor-pointer relative border-yellow-600 w-[300px] h-[300px] overflow-hidden rounded-full group">
      <div className="absolute top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] w-[80%] h-[80%] rounded-full  flex flex-col items-center justify-center bg-slate-800 text-white font-montserrat invisible  group-hover:visible ">
        <span>{name}</span>
        <span>{post}</span>
        <div className="flex items-center space-x-2 bg-white rounded-md p-1 text-black mt-3">
          <FaInstagram size={25} />

          <FaTwitter size={25} />
          <FaFacebook size={25} />
          <FaLinkedin size={25} />
        </div>
      </div>
      <img
        src={imageAddress}
        alt={name}
        className="w-full h-full object-cover "
      />
    </div>
  );
}

export default MemberCard;
