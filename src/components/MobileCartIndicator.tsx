type IndicatorProps = {
  step: number;
};

function MobileCartIndicator({ step }: IndicatorProps) {
  return (
    <div className="flex items-center">
      <div className="flex-1 h-[2px] bg-yellow-500" />
      <div className=" bg-yellow-600 text-white  w-[50px] h-[50px] rounded-full flex items-center justify-center border border-slate-800">
        {step}
      </div>
      <div className="flex-1 h-[2px] bg-yellow-500" />
    </div>
  );
}

export default MobileCartIndicator;
