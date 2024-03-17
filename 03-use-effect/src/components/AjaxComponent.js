import React, { useState, useEffect } from "react";

const AjaxComponent = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);

  const getUsuariosEstaticos = () => {
    setUsuarios([
      {
        id: 1,
        email: "ceci.benitez@reqres.in",
        first_name: "Ceci",
        last_name: "Benitez",
      },
      {
        id: 2,
        email: "sol.ferguson@reqres.in",
        first_name: "Sol",
        last_name: "Ferguson",
      },
      {
        id: 3,
        email: "luci.funke@reqres.in",
        first_name: "Luci",
        last_name: "Funke",
      },
    ]);
  };

  /*
  const getUsuariosAjax = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((respuesta) => respuesta.json())
      .then(
        (resultado_final) => {
          setUsuarios(resultado_final.data);
          console.log(usuarios);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  */

  const getUsuariosAjax = () => {
    setTimeout(async () => {
      const peticion = await fetch("https://reqres.in/api/users?page=1");
      const { data } = await peticion.json();
      setUsuarios(data);
      setCargando(false);
    }, 3000);
  };

  useEffect(() => {
    // getUsuariosEstaticos();

    getUsuariosAjax();
  }, []);

  if (cargando === true) {
    return (
      <div className="cargando">
        <h3>Cargando datos...</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Listado de usuarios via AJAX</h2>
        <ol className="usuarios">
          {usuarios.map((usuario) => {
            return (
              <li key={usuario.id}>
                <img src={usuario.avatar} alt={usuario.first_name} width="40" />{" "}
                &nbsp;
                {usuario.first_name} {usuario.last_name}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
};

export default AjaxComponent;
