import "./App.css";
import { NavBar, saludo } from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";

function App() {
  const greetingMessage = saludo + " Bienvenido a nuestra tienda de productos";

  return (
    <div>
      <BrowserRouter>
        <NavBar />
          {/* Coloco el componente Banner fuera de Routes porque lo quiero en todas las rutas */}
          <Banner />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={greetingMessage} />} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
