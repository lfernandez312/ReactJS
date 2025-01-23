import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { PiShoppingCartBold } from "react-icons/pi";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    if (totalQuantity() === 0) {
        return null;
    }

    return (
        <Link to="/cart"
            className="relative flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-100 transition duration-200"
        >
            <PiShoppingCartBold className="text-2xl text-gray-700" />
            <p className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex justify-center items-center">
                {totalQuantity()}
            </p>
        </Link>
    );
};

export default CartWidget;
