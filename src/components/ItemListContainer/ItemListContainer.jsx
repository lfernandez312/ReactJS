import { useEffect, useState } from "react";
// import { getProducts } from "../../data/data"; archivo local con productos matafuegos
import ItemList from "./ItemList";
import { getProducts, addProduct, modProductById} from "../../utils/fetchApi";

const ItemListContainer = ({ greeting }) => {

    const [products, setProducts] = useState([])

    const newProduct = {
        "name": "Matafuegooo ABC 2,5 Kg",
        "description": "Matafuegoo ideal para fuegos eléctricos y líquidos inflamables.",
        "price": 100000000000000,
        "stock": 8,
        "category": "ABC",
        "imageUrl": "https://www.starfirematafuegos.com.ar/tienda/admin/storage/products/D_NQ_NP_2X_671419-MLA29635972691_032019-F-removebg-preview.png"
    }
    const mod = {
        price: 65000,
    }

    useEffect(() => {
        getProducts()
            .then((data)=> setProducts(data) )
    },[])

    // const clickEvento = () => {
    //     addProduct(newProduct)
    //     .then((data)=> setProducts(data) )

    // }
    const clickEventoActualizar = () => {
        modProductById(2, mod)
        .then((data)=> setProducts(data) )
    }

    return (
        <div className="bg-red-600 p-6 text-center dark:bg-red-800">
            {/* Mostrar el mensaje de bienvenida */}
            <h1 className="text-white text-xl font-semibold mb-4">{greeting}</h1>
            {/* <button onClick={clickEvento}>Añadir Productos</button> */}
            <button onClick={clickEventoActualizar}>Modificar Productos</button>
            <ItemList products={products}/>
        </div>
    );
};

export default ItemListContainer;
