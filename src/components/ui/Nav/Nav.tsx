import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <ul className="flex gap-2 bg-stone-700 text-stone-100 px-2 py-4">
      <li className="bg-stone-200 text-stone-700 px-2 py-1 rounded-sm hover:bg-stone-100">
        <Link to="/">Home</Link>
      </li>
      <li className="bg-stone-200 text-stone-700 px-2 py-1 rounded-sm hover:bg-stone-100">
        <Link to="/list">List</Link>
      </li>
    </ul>
  );
};

export default Nav;
