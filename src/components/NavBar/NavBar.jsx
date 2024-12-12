import "./NavBar.css";

const NavBar = () => {
    return (
      <nav className="bg-blue-500 p-4 flex justify-between items-center">
        <p className="text-white text-lg">Logo</p>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white">Inicio</a></li>
          <li><a href="#" className="text-white">Categorías</a></li>
          <li><a href="#" className="text-white">Contáctanos</a></li>
          <li><a href="#" className="text-white">Iniciar Sesión</a></li>
        </ul>
      </nav>
    );
  };
  
  const MainContent = () => {
    return (
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-red-600">Hola Leonel</h1>
        <div className="mt-6">
          <img src="/path/to/your/image.png" alt="Tienda online" className="w-full max-w-md" />
        </div>
      </div>
    );
  };
  
  
const saludo = "Hola Leonel";

export { NavBar,MainContent, saludo };
