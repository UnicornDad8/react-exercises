import React, { useState, useEffect } from "react";
import AvisoComponent from "./AvisoComponent";

const PruebasComponent = () => {
  const [usuario, setUsuario] = useState("Ceci Benitez");
  const [fecha, setFecha] = useState("04-02-1993");
  const [contador, setContador] = useState(0);

  const modificarUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const cambiarFecha = () => {
    setFecha(Date.now());
  };

  // se ejecuta solo al cargar el componente
  useEffect(() => {
    console.log("Has cargado el componente");
  }, []);

  // se ejecuta solo al cambiar el nombre de usuario
  useEffect(() => {
    console.log("Has cambiado el nombre de usuario" + contador);
    setContador(contador + 1);
  }, [fecha, usuario]);

  return (
    <div>
      <h2>El efecto - Hook useEffect</h2>
      <strong className="label">{usuario}</strong>
      <strong className={contador >= 10 ? "label label-green" : "label"}>
        {fecha}
      </strong>
      <div>
        <input
          type="text"
          onChange={modificarUsuario}
          placeholder="Cambiar nombre de usuario"
        />
        <button onClick={cambiarFecha}>Cambiar Fecha</button>
      </div>
      {usuario === "Peque" && <AvisoComponent />}
    </div>
  );
};

export default PruebasComponent;
