import { Outlet } from "react-router-dom";
import Nav from "../ui/Nav/Nav";

const Layout = () => {
  return (
    <div className="p-0 m-0 bg-stone-200 h-full">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Layout;
