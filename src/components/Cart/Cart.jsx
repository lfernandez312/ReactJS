import { useContext } from "react";
import { Link } from "react-router-dom"; // Importa Link para la redirección
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const { cart, totalPrice, removeProduct, clearCart } = useContext(CartContext);

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-semibold mb-4 dark:text-white">Carrito de Compras</h2>

            {cart.length > 0 ? (
                <>
                    <table className="min-w-full bg-white shadow-lg rounded-lg dark:bg-gray-800">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b dark:text-white dark:border-gray-600">Producto</th>
                                <th className="py-2 px-4 border-b dark:text-white dark:border-gray-600">Cantidad</th>
                                <th className="py-2 px-4 border-b dark:text-white dark:border-gray-600">Precio Unitario</th>
                                <th className="py-2 px-4 border-b dark:text-white dark:border-gray-600">Precio Total</th>
                                <th className="py-2 px-4 border-b dark:text-white dark:border-gray-600">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((productCart) => (
                                <tr key={productCart.id} className="text-center">
                                    <td className="py-2 px-4 border-b dark:border-gray-600">
                                        <div className="flex items-center justify-center">
                                            <img
                                                src={productCart.imageUrl[0]}
                                                alt={productCart.name}
                                                className="w-16 h-16 rounded-lg object-cover mr-4"
                                            />
                                            <span className="dark:text-white">{productCart.name}</span>
                                        </div>
                                    </td>
                                    <td className="py-2 px-4 border-b dark:text-white dark:border-gray-600">
                                        {productCart.quantity}
                                    </td>
                                    <td className="py-2 px-4 border-b dark:text-white dark:border-gray-600">
                                        ${productCart.price}
                                    </td>
                                    <td className="py-2 px-4 border-b dark:text-white dark:border-gray-600">
                                        ${(productCart.quantity * productCart.price)}
                                    </td>
                                    <td className="py-2 px-4 border-b dark:border-gray-600">
                                        <button
                                            onClick={() => removeProduct(productCart.id)}
                                            className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 transition duration-200 dark:bg-red-600 dark:hover:bg-red-700"
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {/* Botón para vaciar el carrito */}
                    <div className="mt-6 flex justify-end">
                        <Link className="mt-4 inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-200 dark:bg-blue-600 dark:hover:bg-blue-700" to="/checkout">Procesar Compra</Link>
                    </div>
                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={clearCart}
                            className="bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 transition duration-200 dark:bg-red-600 dark:hover:bg-red-700"
                        >
                            Vaciar Carrito
                        </button>
                    </div>


                    {/* Precio total */}
                    <div className="mt-6 text-right">
                        <h3 className="text-2xl font-bold dark:text-white">Precio Total: ${totalPrice()}</h3>
                    </div>
                </>
            ) : (
                <div className="text-center">
                    <p className="text-gray-600 dark:text-gray-300">El carrito está vacío.</p>
                    <Link
                        to="/"
                        className="mt-4 inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-200 dark:bg-blue-600 dark:hover:bg-blue-700"
                    >
                        Volver al Inicio
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Cart;
