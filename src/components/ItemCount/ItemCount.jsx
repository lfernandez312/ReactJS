import { useState } from "react";

const ItemCount = ({ stock, AddProductInCart }) => {
    const [count, setCount] = useState(1);

    const handleClickRemove = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    const handleClickAdd = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleAddToCart = () => {
        onAddToCart(count);
    };

    return (
        <div className="flex flex-col items-center gap-2">
            <div className="flex items-center space-x-4">
                <button
                    onClick={handleClickRemove}
                    className="bg-red-500 text-white rounded-full w-10 h-10 flex justify-center items-center hover:bg-red-600 transition duration-200"
                >
                    -
                </button>
                <p className="text-xl font-semibold">{count}</p>
                <button
                    onClick={handleClickAdd}
                    className="bg-green-500 text-white rounded-full w-10 h-10 flex justify-center items-center hover:bg-green-600 transition duration-200"
                >
                    +
                </button>
            </div>
            <p className="text-gray-500">Stock disponible: {stock}</p>

            {/* Botón para agregar al carrito */}
            <button
                onClick={()=>AddProductInCart(count)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;
