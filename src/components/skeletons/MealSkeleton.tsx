import SkeletonElement from "./SkeletonElement";

function MealSkeleton() {
  return (
    <div className="flex flex-col md:flex-row items-center space-x-0 md:space-x-8  justify-between py-4 mb-4 border-b border-black/60 max-w-[700px] ">
      <div className="mb-5 md:mb-0">
        <SkeletonElement type="thumbnail" />
      </div>
      {/* name and button  div flex with quantity and price */}
      <div className="flex flex-1 items-center   px-2  w-full md:px-0">
        {/* name and button */}
        <div className="flex flex-col space-y-7 ">
          <SkeletonElement type="header" />
          <SkeletonElement type="header" />
        </div>
        {/* quantity and price */}
        <div className="flex flex-col space-y-7  flex-1 self-end">
          <div className="flex items-center space-x-2 self-end">
            <SkeletonElement type="header" />
          </div>
          <span className="self-end font-montserrat text-sm px-2 py-2 md:px-3  md:text-lg">
            <SkeletonElement type="text" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default MealSkeleton;
