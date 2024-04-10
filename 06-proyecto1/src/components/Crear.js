import React, { useState } from "react";

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
    guardarEnStorage(peli);
    // console.log(peliState);
  };

  const guardarEnStorage = (peli) => {
    let elementos = JSON.parse(localStorage.getItem("pelis"));

    if (Array.isArray(elementos)) {
      elementos.push(peli);
    } else {
      elementos = [peli];
    }

    localStorage.setItem("pelis", JSON.stringify(elementos));
    console.log(elementos);
    return peli;
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
