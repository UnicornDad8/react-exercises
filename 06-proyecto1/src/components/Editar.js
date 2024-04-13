import React from "react";

const Editar = ({ peli }) => {
  const titulo_componente = "Editar Pelicula";
  return (
    <div className="edit_form">
      <h3 className="title">{titulo_componente}</h3>
      <form className="edit_form">
        <input
          type="text"
          name="titulo"
          className="titulo_editado"
          defaultValue={peli.titulo}
        />
        <textarea
          name="descripcion"
          defaultValue={peli.descripcion}
          className="descripcion_editada"
        />
        <input type="submit" className="editar" value="Actualizar" />
      </form>
    </div>
  );
};

export default Editar;
