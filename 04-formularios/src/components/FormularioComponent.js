import React, { useState } from "react";

const FormularioComponent = () => {
  const [usuario, setUsuario] = useState({});

  const conseguirDatosFormulario = (e) => {
    e.preventDefault();

    let datos = e.target;
    let usuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero: datos.genero.value,
      bio: datos.bio.value,
      enviar: datos.enviar.value,
    };

    setUsuario(usuario);
  };

  const cambiarDatos = (e) => {
    let name_del_input = e.target.name;

    setUsuario((estado_previo) => ({
      ...estado_previo,
      [name_del_input]: e.target.value,
    }));
  };

  return (
    <div>
      <h2>Formularios con React</h2>
      {usuario.enviar && (
        <div className="info_usuario label label-gray">
          <p>
            {usuario.nombre} {usuario.apellido}
          </p>
          <p>{usuario.genero}</p>
          <p>{usuario.bio}</p>
        </div>
      )}
      <form onSubmit={conseguirDatosFormulario}>
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          onChange={cambiarDatos}
        />
        <input
          type="text"
          placeholder="Apellido"
          name="apellido"
          onChange={cambiarDatos}
        />
        <select name="genero" onChange={cambiarDatos}>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
        <textarea placeholder="Biografia" name="bio" onChange={cambiarDatos} />
        <input type="submit" value="Enviar" name="enviar" />
      </form>
    </div>
  );
};

export default FormularioComponent;
