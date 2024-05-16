import { LuLoader2 } from "react-icons/lu";

type LoaderProp = {
  process: string;
};
function AuthLoader({ process }: LoaderProp) {
  return (
    <div className="fixed top-0 left-0 h-[100vh] w-[100vw] bg-black/80 flex flex-col items-center justify-center text-white font-bold z-[1999] text-2xl">
      <p> {process}</p>
      <div>
        {" "}
        <LuLoader2 className="animate-spin" size={40} />
      </div>
    </div>
  );
}

export default AuthLoader;
