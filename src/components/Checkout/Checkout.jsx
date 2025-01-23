import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import FormCheckout from "./FormCheckout";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import db from "../../data/db";
import Loader from "../../utils/loader"; // Asegúrate de tener el componente Loader importado

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false); // Estado de carga
  const { cart, totalPrice, clearCart } = useContext(CartContext); // Asumiendo que tienes clearCart en tu CartContext

  const handleChangeInput = (event) => {
    setDataForm({
      ...dataForm,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    setLoading(true); // Activar el estado de carga antes de enviar la orden

    const order = {
      buyer: { ...dataForm },
      products: { ...cart },
      total: totalPrice(),
      date: Timestamp.fromDate(new Date()),
    };

    await uploadOrder(order);
    setLoading(false); // Desactivar el estado de carga después de completar el proceso
    clearCart(); // Resetea el carrito después de enviar la orden
    setDataForm({ fullname: "", phone: "", email: "" }); // Limpia el formulario si es necesario
  };

  const uploadOrder = async (newOrder) => {
    try {
      const ordersRef = collection(db, "orders");
      const response = await addDoc(ordersRef, newOrder);
      setOrderId(response.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {loading && (
        <div className="flex justify-center items-center min-h-screen">
          <Loader loading={loading} />
        </div>
      )}

      {orderId ? (
        <div className="text-center mt-6 p-6 bg-green-100 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-700">Orden subida correctamente</h2>
          <h3 className="text-xl text-gray-700 mt-4">Guarde su número de seguimiento</h3>
          <p className="text-lg text-blue-600 mt-2">{orderId}</p>
          <Link
                to="/"
                className="mt-4 inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-200 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
                Volver al Inicio
            </Link>
        </div>
      ) : (
          <FormCheckout
            dataForm={dataForm}
            handleChangeInput={handleChangeInput}
            handleSubmitForm={handleSubmitForm}
          />
      )}
    </div>
  );
};

export default Checkout;
