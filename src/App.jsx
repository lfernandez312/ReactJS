import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  const greetingMessage = "Bienvenido a nuestra tienda";

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <ItemListContainer greeting={greetingMessage} />
              </>
            }
          />
          <Route
            path="/category/:idCategory"
            element={
              <ItemListContainer greeting="Explora nuestras categorías" />
            }
          />
          <Route path="/item/:idProduct" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;