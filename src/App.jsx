import "./App.css";
// import NavBar from "./components/NavBar";
import { NavBar, saludo } from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  const condicion = true;

  const greetingMessage = saludo;
  const greetingMessage2 = "Bienvenido a nuestra tienda";


  return (
    <div>
      <NavBar />
      <div>
        <ItemListContainer greeting={greetingMessage} />
        <ItemListContainer greeting={greetingMessage2} />
      </div>
      <Banner />
    </div>
  );
}

export default App;
