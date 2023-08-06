import { ReactNode } from "react";
// import { Outlet } from "react-router-dom";
// import Nav from "../ui/Nav/Nav";

interface ILayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="p-0 m-0 bg-stone-200 h-full">
      {/* <Nav /> */}
      {/* <Outlet /> */}
      <div>{children}</div>
    </div>
  );
};

export default Layout;
