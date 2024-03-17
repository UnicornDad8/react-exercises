import React from "react";

const EventosComponente = () => {
  const hasDadoClick = (nombre) => {
    alert("Haz dado click!!, Hola " + nombre);
  };

  const hasDadoDobleClick = () => {
    alert("Has dado doble click");
  };

  const hasEntrado = (accion) => {
    alert("Has " + accion + " a la caja con el mouse");
  };

  const hasSalido = (accion) => {
    alert("Has " + accion + " a la caja con el mouse");
  };

  const estasDentro = () => {
    console.log("Estas dentro del input, mete tu nombre");
  };

  const estasFuera = () => {
    console.log("Estas fuera del input, chau");
  };

  return (
    <div>
      <h2>Eventos en React</h2>
      <button onClick={() => hasDadoClick("Ceci")}>Dame click!</button>
      <button onDoubleClick={hasDadoDobleClick}>Dame doble click</button>
      <div
        id="caja"
        onMouseEnter={() => hasEntrado("entrado")}
        onMouseLeave={() => hasSalido("salido")}
      >
        Pasa por encima
      </div>

      <div>
        <input
          type="text"
          onFocus={estasDentro}
          onBlur={estasFuera}
          placeholder="Introduce tu nombre"
        />
      </div>
    </div>
  );
};

export default EventosComponente;
