import { useState } from "react";
import CartWidget from "../CartWidget/CartWidget";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          {/* Icono hamburguesa*/}
          <span className="material-icons">menu</span>
        </button>
      </div>

      {/* Lista de navegación */}
      <ul 
        className={`flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-start ${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-4 md:space-y-0`}
      >
        <li><a href="#" className="text-white dark:text-white">Inicio</a></li>
        <li><a href="#" className="text-white dark:text-white">Categorías</a></li>
        <li><a href="#" className="text-white dark:text-white">Contáctanos</a></li>
        <li><a href="#" className="text-white dark:text-white">Iniciar Sesión</a></li>
      </ul>

      {/* Carrito y Modo Oscuro a la derecha */}
      <div className="ml-auto flex space-x-4">
        <CartWidget />
        <DarkModeToggle />
      </div>
    </nav>
  );
};

const saludo = "Hola Leonel";

export { NavBar, saludo };
