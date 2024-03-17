import React, { useEffect } from "react";

const AvisoComponent = () => {
  // Cuando el componente se monta
  // y se ejecuta una sola vez porque el array esta vacio
  useEffect(() => {
    alert("El aviso esta montado");

    // Cuando el componente se desmonta usamos el return
    return () => {
      alert("Componente desmontado");
    };
  }, []);

  return (
    <div>
      <hr />
      <h2>Saludos Peque</h2>
      <button
        onClick={(e) => {
          alert("Bienvenido Peque");
        }}
      >
        Mostrar Alerta
      </button>
    </div>
  );
};

export default AvisoComponent;
