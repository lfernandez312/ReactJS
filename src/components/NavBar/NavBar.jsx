import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCategories = () => {
    setIsCategoriesOpen(!isCategoriesOpen);
  };

  return (
    <div className="relative z-40">
      <nav className="bg-red-600 p-4 flex flex-col md:flex-row justify-between items-center dark:bg-red-800 relative z-10">
        {/* Logo */}
        <div className="flex justify-between w-full md:w-auto md:mr-4">
          <Link to="/">
            <img
              src="/img/logo2.png"
              alt="Logo"
              className="w-[6rem] h-[5rem] text-white dark:text-white"
            />
          </Link>
          {/* Menú hamburguesa en dispositivos móviles */}
          <button
            className="text-white dark:text-white md:hidden"
            onClick={toggleMenu}
          >
            {/* Icono hamburguesa */}
            <span className="material-icons">menu</span>
          </button>
        </div>

        {/* Lista de navegación */}
        <ul
          className={`flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-start ${isMenuOpen ? "block" : "hidden"} md:flex md:space-x-4 md:space-y-0 relative`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white dark:text-white font-bold" // Activo
                  : "text-white dark:text-white"
              }
            >
              Inicio
            </NavLink>
          </li>

          {/* Menú desplegable de Categorías */}
          <li className="relative z-30">
            <button
              className="text-white dark:text-white focus:outline-none"
              onClick={toggleCategories}
            >
              Categorías
            </button>
            {/* Submenú de categorías */}
            {isCategoriesOpen && (
              <ul className="absolute bg-white dark:bg-gray-800 text-black dark:text-white mt-2 space-y-2 p-2 rounded-md shadow-lg z-50">
                <li>
                  <NavLink
                    to="/category/ABC"
                    className={({ isActive }) =>
                      isActive
                        ? "hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded font-bold" // Activo
                        : "hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded"
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
                        ? "hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded font-bold" // Activo
                        : "hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded"
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
                        ? "hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded font-bold" // Activo
                        : "hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded"
                    }
                  >
                    CO2
                  </NavLink>
                </li>
              </ul>
            )}
          </li>

          {/* <li>
            <NavLink
              to="/contactar"
              className={({ isActive }) =>
                isActive
                  ? "text-white dark:text-white font-bold" // Activo
                  : "text-white dark:text-white"
              }
            >
              Contáctanos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className={({ isActive }) =>
                isActive
                  ? "text-white dark:text-white font-bold" // Activo
                  : "text-white dark:text-white"
              }
            >
              Iniciar Sesión
            </NavLink>
          </li> */}
        </ul>

        {/* Carrito y Modo Oscuro a la derecha dentro del nav */}
        <div className="ml-auto flex space-x-4 z-20">
          <CartWidget />
          <DarkModeToggle/>
        </div>
      </nav>
    </div>
  );
};

export { NavBar };
