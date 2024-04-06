import React from "react";

const FormularioComponent = () => {
  return (
    <div>
      <h2>Formularios con React</h2>
      <form>
        <input type="text" placeholder="Nombre" />
        <input type="text" placeholder="Apellido" />
        <select>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
        </select>
        <textarea placeholder="Biografia" />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default FormularioComponent;
