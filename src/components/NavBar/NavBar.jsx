import { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import { Link } from "react-router-dom";

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
    <nav className="bg-red-600 p-4 flex flex-col md:flex-row justify-between items-center dark:bg-red-800">
      {/* Logo */}
      <div className="flex justify-between w-full md:w-auto md:mr-4">
        <a href="#" className="text-white dark:text-white">Logo</a>

        {/* Menú hamburguesa en dispositivos pequeños */}
        <button 
          className="text-white dark:text-white md:hidden"
          onClick={toggleMenu}
        >
          {/* Icono hamburguesa */}
          <span className="material-icons">menu</span>
        </button>
      </div>

      {/* Lista de navegación */}
      <ul className={`flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-start ${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-4 md:space-y-0`}>
        <li><Link to="./" className="text-white dark:text-white">Inicio</Link></li>

        {/* Menú desplegable de Categorías */}
        <li className="relative">
          <button 
            className="text-white dark:text-white focus:outline-none" 
            onClick={toggleCategories}
          >
            Categorías
          </button>
          {/* Submenú de categorías */}
          {isCategoriesOpen && (
            <ul className="absolute bg-white dark:bg-gray-800 text-black dark:text-white mt-2 space-y-2 p-2 rounded-md shadow-md">
              <li><Link to="/category/ABC" className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">ABC</Link></li>
              <li><Link to="/category/Agua" className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">Agua</Link></li>
              <li><Link to="/category/CO2" className="hover:bg-gray-100 dark:hover:bg-gray-700 p-2 rounded">CO2</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="#" className="text-white dark:text-white">Contáctanos</Link></li>
        <li><Link to="#" className="text-white dark:text-white">Iniciar Sesión</Link></li>
      </ul>

      {/* Carrito y Modo Oscuro a la derecha dentro del nav */}
      <div className="ml-auto flex space-x-4">
        <CartWidget />
        <DarkModeToggle />
      </div>
    </nav>
  );
};

const saludo = "Hola Leonel";

export { NavBar, saludo };
