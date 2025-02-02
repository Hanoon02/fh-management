import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="border-gray-200 bg-[#3fada8] py-2">
      <NavLink
        to="/"
        className="flex items-center justify-center  space-x-3  text-gray-100 text-md"
      >
        <h1 className="font-bold text-4xl md:text-6xl text-gray-200 ">
          FH MANAGEMENT
        </h1>
      </NavLink>
    </nav>
  );
}

export default NavBar;
