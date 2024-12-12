import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      {/* Logo con margen derecho */}
      <p className="text-white text-lg mr-4">Logo</p>

      {/* Lista de navegación */}
      <ul className="flex space-x-4">
        <li><a href="#" className="text-white">Inicio</a></li>
        <li><a href="#" className="text-white">Categorías</a></li>
        <li><a href="#" className="text-white">Contáctanos</a></li>
        <li><a href="#" className="text-white">Iniciar Sesión</a></li>
      </ul>

      {/* Carrito a la derecha */}
      <div className="ml-auto">
        <CartWidget />
      </div>
    </nav>
  );
};

const saludo = "Hola Leonel";

export { NavBar, saludo };
