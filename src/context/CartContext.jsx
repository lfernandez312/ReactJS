import { createContext, useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Función para agregar un producto al carrito
    const addProduct = (newProduct) => {
        // Verificamos si el producto ya está en el carrito
        const productInCart = cart.find((item) => item.id === newProduct.id);

        if (productInCart) {
            // Si el producto ya está en el carrito, actualizamos la cantidad
            const updatedCart = cart.map((item) =>
                item.id === newProduct.id
                    ? { ...item, quantity: item.quantity + newProduct.quantity }
                    : item
            );
            setCart(updatedCart);
        } else {
            // Si el producto no está en el carrito, lo agregamos
            setCart([...cart, newProduct]);
        }
    };

    // Total de cantidad de productos en el carrito
    const totalQuantity = () => {
        const quantity = cart.reduce((total, productCart) => total + productCart.quantity, 0);
        return quantity;
    };

    // Precio total de todos los productos en el carrito
    const totalPrice = () => {
        const price = cart.reduce((total, productCart) => total + (productCart.quantity * productCart.price), 0);
        return price;
    };

    const clearCart = () => {
        setCart([]);  // Vaciamos el carrito
    };

    return (
        <CartContext.Provider value={{ cart, addProduct, totalQuantity, totalPrice, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartProvider };
