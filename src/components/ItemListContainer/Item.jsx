const Item = ({product}) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow-lg dark:bg-gray-700">
            <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-black font-bold dark:text-white">{product.name}</p>
            <p className="text-gray-600 dark:text-gray-300">{product.description}</p>
            <p className="text-black font-semibold dark:text-white">${product.price}</p>
        </div>
    )
}

export default Item