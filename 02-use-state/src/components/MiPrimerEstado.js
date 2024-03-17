import React, { useState } from "react";

const MiPrimerEstado = () => {
  /*
  // Problematica sin useState
  let nombre = "Ceci Benitez";

  const cambiarNombre = () => {
    nombre = "Lucas Benitez";
  };
  */

  const [nombre, setNombre] = useState("Ceci Benitez");

  const cambiarNombre = (e, nombreCambiado) => {
    setNombre(nombreCambiado);
  };

  return (
    <div>
      Mi primer Estado
      <p className="label">{nombre}</p>
      <button
        className="btn"
        onClick={(e) => cambiarNombre(e, "Lucas Benitez")}
      >
        Cambiar Nombre
      </button>
      <input
        type="text"
        className="text-input"
        placeholder="Escribe un nombre"
        onKeyUp={(e) => cambiarNombre(e, e.target.value)}
      />
    </div>
  );
};

export default MiPrimerEstado;
