import "./App.css";
import { NavBar, saludo } from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const greetingMessage = saludo + " Bienvenido a nuestra tienda de productos";

  return (
    <div>
      <NavBar />
      <Banner />
      {/* Aquí pasamos el mensaje a ItemListContainer */}
      <ItemListContainer greeting={greetingMessage} />
    </div>
  );
}

export default App;
