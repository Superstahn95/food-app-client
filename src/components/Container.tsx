import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
function Container({ children }: Props) {
  return <div className="max-w-7xl mx-auto ">{children}</div>;
}

export default Container;
