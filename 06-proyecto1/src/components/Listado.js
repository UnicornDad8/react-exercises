import React, { useEffect, useCallback, useState } from "react";
import Editar from "./Editar";

const Listado = ({ listadoState, setListadoState }) => {
  const [editar, setEditar] = useState(0);

  const conseguirPeliculas = useCallback(() => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));
    setListadoState(peliculas);
    return peliculas;
  }, [setListadoState]);

  useEffect(() => {
    conseguirPeliculas();
  }, [conseguirPeliculas]);

  const borrarPeli = (id) => {
    let pelis_almacenadas = conseguirPeliculas();

    let nuevo_array_pelis = pelis_almacenadas.filter(
      (peli) => peli.id !== parseInt(id)
    );

    setListadoState(nuevo_array_pelis);

    localStorage.setItem("pelis", JSON.stringify(nuevo_array_pelis));
  };

  return (
    <>
      {listadoState.length !== 0 ? (
        listadoState.map((peli) => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>

              <button className="edit" onClick={() => setEditar(peli.id)}>
                Editar
              </button>
              <button className="delete" onClick={() => borrarPeli(peli.id)}>
                Borrar
              </button>
              {editar === peli.id && <Editar peli={peli} />}
            </article>
          );
        })
      ) : (
        <h2 className="no-pelis">No hay peliculas para mostrar</h2>
      )}
    </>
  );
};

export default Listado;
