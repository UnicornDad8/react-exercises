import logo from "./logo.svg";
import "./App.css";
import MiPrimerEstado from "./components/MiPrimerEstado";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>El Estado en React - Hook UseState</h2>
        <MiPrimerEstado />
      </header>
    </div>
  );
}

export default App;
