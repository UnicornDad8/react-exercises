import React from "react";
import PropTypes from "prop-types";

const TercerComponente = ({ nombre, apellidos, ficha }) => {
  return (
    <div>
      <h3>Comunicacion entre componentes</h3>
      <ul>
        <li>
          {nombre} {apellidos}
        </li>
        <li>{ficha.grupo}</li>
        <li>{ficha.estado}</li>
      </ul>
    </div>
  );
};

TercerComponente.propTypes = {
  nombre: PropTypes.string.isRequired,
  apellidos: PropTypes.string.isRequired,
  ficha: PropTypes.object,
};

TercerComponente.defaultProps = {
  nombre: "Ceci",
  apellidos: "Benitez Casaccia",
};

export default TercerComponente;
