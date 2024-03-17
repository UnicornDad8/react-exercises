import logo from "./logo.svg";
import "./App.css";
import EjercicioComponent from "./components/EjercicioComponent";

function App() {
  const fecha = new Date();
  const yearActual = fecha.getFullYear();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Esto es un repaso de React</p>
        <EjercicioComponent year={yearActual} />
      </header>
    </div>
  );
}

export default App;
