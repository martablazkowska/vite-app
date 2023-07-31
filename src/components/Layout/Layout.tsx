import { ReactElement } from "react";

interface ILayoutProps {
  children: ReactElement;
}

const Layout = ({ children }: ILayoutProps) => {
  return <div className="p-0 m-0 bg-stone-200 h-full">{children}</div>;
};

export default Layout;
