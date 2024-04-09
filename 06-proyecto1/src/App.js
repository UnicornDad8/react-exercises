function App() {
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
        <article className="peli-item">
          <h3 className="title">Desarrollo Web</h3>
          <p className="description">Github: Unicorn Dad</p>

          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>
        <article className="peli-item">
          <h3 className="title">Desarrollo Web</h3>
          <p className="description">Github: Unicorn Dad</p>

          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>
        <article className="peli-item">
          <h3 className="title">Desarrollo Web</h3>
          <p className="description">Github: Unicorn Dad</p>

          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>
        <article className="peli-item">
          <h3 className="title">Desarrollo Web</h3>
          <p className="description">Github: Unicorn Dad</p>

          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>
        <article className="peli-item">
          <h3 className="title">Desarrollo Web</h3>
          <p className="description">Github: Unicorn Dad</p>

          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>
        <article className="peli-item">
          <h3 className="title">Desarrollo Web</h3>
          <p className="description">Github: Unicorn Dad</p>

          <button className="edit">Editar</button>
          <button className="delete">Borrar</button>
        </article>
      </section>

      <aside className="lateral">
        <div className="search">
          <h3 className="title">Buscador</h3>
          <form>
            <input type="text" placeholder="Buscar" />
            <button>Buscar</button>
          </form>
        </div>
        <div className="add">
          <h3 className="title">Añadir Pelicula</h3>
          <form>
            <input type="text" placeholder="Titulo" />
            <textarea placeholder="Descripcion"></textarea>
            <input type="submit" value="Guardar" />
          </form>
        </div>
      </aside>

      <footer className="footer">
        &copy; Master en JavaScript ES12 y TypeScript -
        <a href="https://github.com/UnicornDad8">Unicorn Dad</a>
      </footer>
    </div>
  );
}

export default App;
