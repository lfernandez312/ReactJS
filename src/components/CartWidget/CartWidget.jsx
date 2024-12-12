import "./CartWidget.css"

const CartWidget = () => {
    const cantidad = 5; // Número hardcodeado de items en el carrito (puede ser cualquier número)

    return (
        <div className="relative">
            {/* Ícono de carrito */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h18M3 3l3 18h12l3-18H3z" />
            </svg>

            {/* Notificación de cantidad */}
            {cantidad > 0 && (
                <span className="absolute top-0 right-0 block bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cantidad}
                </span>
            )}
        </div>
    );
};

export default CartWidget;
