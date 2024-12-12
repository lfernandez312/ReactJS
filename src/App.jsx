import "./App.css";
// import NavBar from "./components/NavBar";
import { NavBar, saludo } from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const condicion = true;

  const greetingMessage = saludo + " Bienvenido a nuestra tienda de productos";

  return (
    <div>
      <NavBar />
      <div>
        <ItemListContainer greeting={greetingMessage} />
      </div>
      <Banner />
    </div>
  );
}

export default App;
