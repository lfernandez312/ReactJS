const ItemList = (products) => {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
              return (
                  <div 
                      key={product.id} 
                      className="p-4 bg-white rounded-lg shadow-lg dark:bg-gray-700">
                       <img 
                          src={product.imageUrl} 
                          alt={product.name} 
                          className="w-full h-48 object-cover rounded-lg mb-4"
                       />
                       <p className="text-black font-bold dark:text-white">{product.name}</p>
                       <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
                       <p className="text-black font-semibold dark:text-white">${product.price}</p>
                  </div>
              );
          })}
      </div>
    )
  }
  
  export default ItemList