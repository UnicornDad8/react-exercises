import React, { useState } from "react";
import { GuardarEnStorage } from "../helpers/GuardarEnStorage";

const Crear = ({ setListadoState }) => {
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
    setListadoState((elementos) => {
      return [...elementos, peli];
    });
    GuardarEnStorage("pelis", peli);
  };

  return (
    <div className="add">
      <h3 className="title">{tituloComponente}</h3>
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
