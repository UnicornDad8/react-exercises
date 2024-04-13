import React from "react";

const Editar = () => {
  const titulo_componente = "Editar Pelicula";
  return (
    <div className="edit_form">
      <h3 className="title">{titulo_componente}</h3>
      <form className="edit_form">
        <input
          type="text"
          name="titulo"
          className="titulo_editado"
          defaultValue="Titulo original de la pelicula"
        />
        <textarea
          name="descripcion"
          defaultValue="Descripcion original"
          className="descripcion_editada"
        />
        <input type="submit" className="editar" value="Actualizar" />
      </form>
    </div>
  );
};

export default Editar;
