import "./App.css";
// import NavBar from "./components/NavBar";
import {NavBar, saludo} from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";


function App() {

  const condicion = true;

  const estilosh1 = {color : condicion==true ? "red" : "blue", fontSize: "50px"}
  return (
    <div>
      <NavBar/>
      <h1 style={estilosh1}>{saludo}</h1>
      <Banner></Banner>
    </div>
  );
}

export default App;
