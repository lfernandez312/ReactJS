import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { getProducts } from "../../data/data";
import { useParams } from "react-router-dom";
import Loader from "../../utils/loader";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);

  const { idProduct } = useParams();

  useEffect(() => {
    setLoading(true);
    getProducts()
      .then((data) => {
        const productFind = data.find((dataProduct) => dataProduct.id === parseInt(idProduct));
        setProduct(productFind);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [idProduct]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Loader loading={loading} />
      {product ? <ItemDetail product={product} /> : !loading && <p>Producto no encontrado</p>}
    </div>
  );
};

export default ItemDetailContainer;
