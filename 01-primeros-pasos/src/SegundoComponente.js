import React from "react";

const SegundoComponente = () => {
  const libros = ["Harry Potter", "Juego de Tronos", "Clean Code"];

  return (
    <div className="segundo-componente">
      <h3>Lista de libros: </h3>
      {libros.length >= 1 ? (
        <ul>
          {libros.map((libro) => (
            <li key={libro}>{libro}</li>
          ))}
        </ul>
      ) : (
        <p>No hay libros</p>
      )}
    </div>
  );
};

export default SegundoComponente;
