import { useEffect, useState } from "react";
import { getProducts } from "../../data/data";

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then((data) => {
            setProducts(data);
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            console.log("terminó la promesa");
        });
    }, []);

    console.log(products);

    return (
        <div className="bg-red-600 p-6 text-center dark:bg-red-800">
            {/* Mostrar el mensaje de bienvenida */}
            <h1 className="text-white text-xl font-semibold mb-4">{greeting}</h1>
        </div>
    );
};

export default ItemListContainer;
