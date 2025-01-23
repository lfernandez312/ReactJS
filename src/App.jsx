import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./context/CartContext";
import LoadProductsPage from "./data/LoadProductsPage";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {
  const greetingMessage = "Bienvenido a nuestra tienda";

  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={
                <>
                  <Banner />
                  <ItemListContainer greeting={greetingMessage} />
                </>
              }
            />
            <Route path="/load-products" element={<LoadProductsPage />} /> {/* Ruta donde cargará los productos */}
            <Route path="/category/:idCategory" element={<ItemListContainer greeting="Explora nuestras categorías" />}/>
            <Route path="/item/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
