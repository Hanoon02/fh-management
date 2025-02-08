import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function NavBar({ title }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-3 ${
        isScrolled
          ? "bg-transparent backdrop-blur-sm border-b border-white/10 shadow-md"
          : "bg-[#3fada8]"
      }`}
    >
      <NavLink
        to="/"
        className="flex items-center justify-center space-x-3 text-gray-100 text-md"
      >
        <h1
          className={`font-bold text-4xl md:text-6xl ${
            isScrolled ? "text-[#3fada8]" : "text-gray-200"
          }`}
        >
          {title}
        </h1>
      </NavLink>
    </nav>
  );
}

export default NavBar;
