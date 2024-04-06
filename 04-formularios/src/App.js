import logo from "./logo.svg";
import FormularioComponent from "./components/FormularioComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FormularioComponent />
      </header>
    </div>
  );
}

export default App;
