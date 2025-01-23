import { useEffect, useState } from "react";
// import { getProducts } from "../../data/data";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "../../utils/loader";
import {collection, getDocs} from "firebase/firestore"
import db from "../../data/db";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { idCategory } = useParams();

  const collectionName = collection(db, "items")

  const getProducts = async () => {
    try {
      setLoading(true);

      const dataDb = await getDocs(collectionName);

      const data = dataDb.docs.map((productDb) => {
        return { id: productDb.id, ...productDb.data() };
      });
      // Filtrar por categoría si idCategory existe
      if (idCategory) {
        const filteredProducts = data.filter((product) => product.category === idCategory);
        setProducts(filteredProducts);
      } else {
        setProducts(data);
      }
    } catch (error) {
      console.error("Error al cargar productos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // en caso de utilizar data.js y no firebase
    // setLoading(true);
    getProducts()// tambien la utilizo para base local y firebase
    // //   .then((data) => {
    // //     if (idCategory) {
    // //       const filteredProducts = data.filter((product) => product.category === idCategory);
    // //       setProducts(filteredProducts);
    // //     } else {
    // //       setProducts(data);
    // //     }
    // //   })
    // //   .catch((error) => console.error(error))
    // //   .finally(() => setLoading(false));
  }, [idCategory]);

  return (
    <>
      <div className="bg-red-600 p-6 text-center dark:bg-red-800">
        <h1 className="text-white text-xl font-semibold mb-4">
          {greeting} {idCategory ? `- Categoria Buscada: ${idCategory}` : ""}
        </h1>
      </div>
      <div className="flex justify-center items-center mt-6">
        <Loader loading={loading} />
        {!loading && <ItemList products={products} />}
      </div>
    </>
  );
};

export default ItemListContainer;
