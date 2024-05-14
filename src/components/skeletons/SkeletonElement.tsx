import "./skeletonElement.css";

type SkeletonProps = {
  type: "thumbnail" | "header" | "text" | "avatar";
};

function SkeletonElement({ type }: SkeletonProps) {
  const className = `skeleton ${type}`;
  return <div className={className} />;
}

export default SkeletonElement;
