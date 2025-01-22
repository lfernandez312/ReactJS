import { Link } from "react-router-dom";

const Item = ({ product }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 max-w-xs mx-auto dark:bg-gray-800 dark:text-white relative z-30">
            <img 
                src={product.imageUrl[0]} 
                alt={product.name} 
                className="w-full h-48 object-contain rounded-lg mb-4"
            />
            <p className="text-black font-bold dark:text-white">{product.name}</p>
            <p className="text-gray-600 dark:text-gray-400">{product.description}</p>
            <p className="text-black font-semibold dark:text-white">${product.price}</p><br />
            <Link to={ "/item/"+product.id} className="mt-4 w-full bg-blue-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors dark:bg-blue-600 dark:text-black dark:hover:bg-blue-500">
                Ver detalles
            </Link>
            <button className="mt-4 w-full bg-yellow-500 text-black font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors dark:bg-yellow-600 dark:text-black dark:hover:bg-yellow-500">
                Agregar al carrito
            </button>
        </div>
        
    );
};

export default Item;
