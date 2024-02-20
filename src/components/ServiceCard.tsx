interface Props {
  service: string;
  icon: JSX.Element;
  bgColor: string;
}
function ServiceCard({ icon, service, bgColor }: Props) {
  return (
    <div
      className={`${bgColor} flex items-center justify-center p-4  rounded-md space-x-2 font-montserrat text-white `}
    >
      <div className="border border-black rounded-md p-4">{icon}</div>
      <div>
        <span className="font-bold capitalize text-xl">{service}</span>
      </div>
    </div>
  );
}

export default ServiceCard;
