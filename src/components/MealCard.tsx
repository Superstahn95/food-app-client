type Props = {
  name: string;
  price: number;
  imageAddress: string;
  description: string;
};

function MealCard({ name, price, imageAddress, description }: Props) {
  return (
    <div className="flex items-center space-x-2 text-white font-montserrat">
      <div>
        <img src={imageAddress} alt="" className="w-12 h-12 rounded-full" />
      </div>
      <div>
        <div className="mb-2">
          <span className="font-dancingScript ">
            {name}.......................................
            <span className="font-montserrat">{price}</span>
          </span>
        </div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

export default MealCard;
