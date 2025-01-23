import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <div className="relative z-40">
      <nav className="bg-red-600 p-4 flex flex-col md:flex-row justify-between items-center dark:bg-red-800 relative z-10">
        <div className="flex justify-between w-full md:w-auto md:mr-4">
          <Link to="/">
            <img
              src="/img/logo2.png"
              alt="Logo"
              className="w-[6rem] h-[5rem] text-white dark:text-white"
            />
          </Link>
          <button
            className="text-white dark:text-white md:hidden"
            onClick={toggleMenu}
          >
            <span className="material-icons">menu</span>
          </button>
        </div>

        {/* Lista de navegación */}
        <ul
          className={`flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-start md:flex md:space-x-4 relative ${
            isMenuOpen ? "block" : "hidden" 
          } md:block`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white dark:text-white font-bold"
                  : "text-white dark:text-white"
              }
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/ABC"
              className={({ isActive }) =>
                isActive
                  ? "text-white dark:text-white font-bold"
                  : "text-white dark:text-white"
              }
            >
              ABC
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/Agua"
              className={({ isActive }) =>
                isActive
                  ? "text-white dark:text-white font-bold"
                  : "text-white dark:text-white"
              }
            >
              Agua
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/category/CO2"
              className={({ isActive }) =>
                isActive
                  ? "text-white dark:text-white font-bold"
                  : "text-white dark:text-white"
              }
            >
              CO2
            </NavLink>
          </li>
        </ul>
        <div className="ml-auto flex space-x-4 z-20">
          <CartWidget />
          <DarkModeToggle />
        </div>
      </nav>
    </div>
  );
};

export { NavBar };