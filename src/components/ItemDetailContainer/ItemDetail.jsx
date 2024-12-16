const ItemDetail = ({ product }) => {
  return (
    <div className="max-w-4xl mx-auto p-6 border border-gray-300 rounded-lg bg-white dark:bg-gray-800 dark:border-gray-700 flex flex-col md:flex-row md:space-x-8 mt-6">
      {/* Imagen del producto */}
      <div className="md:w-1/2 mb-4 md:mb-0">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-auto rounded-lg object-cover" 
        />
      </div>

      {/* Información del producto */}
      <div className="md:w-1/2">
        {/* Título del producto */}
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">{product.name}</h2>
        
        {/* Descripción del producto */}
        <p className="text-gray-600 dark:text-gray-400 mb-4">{product.description}</p>

        {/* Precio del producto */}
        <div className="mb-6">
          <span className="text-2xl font-bold text-gray-800 dark:text-white">${product.price}</span>
        </div>

        {/* Botón para agregar al carrito */}
        <button className="w-full py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-orange-600 dark:hover:bg-orange-500">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemDetail;