import { useState,useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
  const [currentImage, setCurrentImage] = useState(product.imageUrl[0]);
  const {addProduct} = useContext(CartContext);


  const AddProductInCart = (count) => {
    const productCart = {...product, quantity:count}
    
    addProduct(productCart)
  }

  return (
    <div className="container mx-auto p-6 mt-6">
      <div className="flex flex-col md:flex-row bg-white dark:bg-gray-900 shadow-lg rounded-lg">
        {/* Miniaturas de las otras imágenes en columna */}
        <div className="flex flex-col space-y-4 justify-start md:w-1/6 p-4">
          {product.imageUrl.map((imageUrl) => (
            <img
              key={imageUrl}
              src={imageUrl}
              alt={product.name}
              className={`w-16 h-16 object-cover rounded-lg cursor-pointer ${imageUrl === currentImage ? 'border-2 border-green-500' : ''}`}
              onClick={() => setCurrentImage(imageUrl)}
            />
          ))}
        </div>

        {/* Imagen principal y descripción */}
        <div className="flex flex-col md:w-5/6 p-4">
          {/* Imagen principal ajustada */}
          <div className="flex justify-center items-center border border-gray-300 rounded-lg mb-4">
            <img
              src={currentImage}
              alt={product.name}
              className="max-w-full max-h-[400px] object-contain" // Ajustar altura máxima y mantener proporciones
            />
          </div>

          {/* Información del producto */}
          <div>
            {/* Título del producto */}
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-4">{product.name}</h2>
            
            {/* Descripción del producto */}
            <p className="text-gray-600 dark:text-gray-400 mb-4">{product.description}</p>

            {/* Precio del producto */}
            <div className="mb-6">
              <span className="text-2xl font-bold text-gray-800 dark:text-white">${product.price}</span>
            </div>
            <ItemCount stock={product.stock} AddProductInCart={AddProductInCart}/>         
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
