import React, { useState } from "react";

const PrimerComponente = () => {
  const [nombre, setNombre] = useState("CECI BENITEZ");
  let email = "cecibot9@gmail.com";

  let cursos = [
    "Master en JavaScript",
    "Master en PHP",
    "Master en React",
    "Master en CSS",
  ];

  const cambiarNombre = (nuevoNombre) => {
    setNombre(nuevoNombre);
  };

  const mostrarEstado = (e) => {
    console.log("El valor guardado en tu estado es: " + nombre);
  };

  return (
    <div>
      <h2>Mi primer componente</h2>
      <p>Este es el primer componente</p>

      <p>
        mi nombre es:{" "}
        <strong className={nombre.length >= 4 ? "verde" : "rojo"}>
          {nombre}
        </strong>
      </p>
      <p>
        mi email es: <strong>{email}</strong>
      </p>
      <hr />
      <button onClick={(e) => cambiarNombre("LUCAS BENITEZ")}>
        Cambiar Nombre
      </button>
      <button onClick={mostrarEstado}>Mostrar Estado</button>
      <input
        type="text"
        onChange={(e) => cambiarNombre(e.target.value)}
        placeholder="Escribe un nombre"
      />
      <hr />
      <h2>Cursos:</h2>
      <ul>
        {cursos.map((curso) => (
          <li key={curso}>{curso}</li>
        ))}
      </ul>
    </div>
  );
};

export default PrimerComponente;
