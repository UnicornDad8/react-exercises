import React, { useState } from "react";
import Listado from "./components/Listado";
import Buscador from "./components/Buscador";
import Crear from "./components/Crear";

function App() {
  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>

        <h2>MisPelis</h2>
      </header>

      <nav className="nav">
        <ul>
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Peliculas</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Contacto</a>
          </li>
        </ul>
      </nav>

      <section className="content">
        <Listado
          listadoState={listadoState}
          setListadoState={setListadoState}
        />
      </section>

      <aside className="lateral">
        <Buscador
          listadoState={listadoState}
          setListadoState={setListadoState}
        />
        <Crear setListadoState={setListadoState} />
      </aside>

      <footer className="footer">
        &copy; Master en JavaScript ES12 y TypeScript -
        <a href="https://github.com/UnicornDad8">Unicorn Dad</a>
      </footer>
    </div>
  );
}

export default App;
