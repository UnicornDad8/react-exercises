import React, { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

const Crear = () => {
  const tituloComponente = "Añadir Pelicula";
  const [peliState, setPeliState] = useState({
    titulo: "",
    descripcion: "",
  });

  const { titulo, descripcion } = peliState;

  const conseguirDatosForm = (e) => {
    e.preventDefault();

    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;

    let peli = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    };

    setPeliState(peli);
    GuardarEnStorage("pelis", peli);
    // console.log(peliState);
  };

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>
      {titulo && descripcion && (
        <p>
          Has creado la pelicula: <strong>{titulo}</strong>
        </p>
      )}
      <form onSubmit={conseguirDatosForm}>
        <input type="text" placeholder="Titulo" id="titulo" name="titulo" />
        <textarea
          id="descripcion"
          name="descripcion"
          placeholder="Descripcion"
        ></textarea>
        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>
  );
};

export default Crear;
