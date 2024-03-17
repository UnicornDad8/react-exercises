// Importar modulos de react /
import React from "react";

// Funcion del componente
const MiComponente = () => {
  let usuario = {
    nombre: "Ceci",
    apellidos: "Benitez Casaccia",
    web: "cecibot9@gmail.com",
  };

  return (
    <>
      <h1>Mi Componente creado</h1>
      <h3>Datos del usuario</h3>
      <ul>
        <li>Nombre: {usuario.nombre}</li>
        <li>Apellidos: {usuario.apellidos}</li>
        <li>Web: {usuario.web}</li>
      </ul>
      <p>Este es mi primer componente</p>
    </>
  );
};

// Export del componente
export default MiComponente;
