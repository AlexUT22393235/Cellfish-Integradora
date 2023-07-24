import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UpdateAdministrador() {
  const { id } = useParams();

  const [formulario, setFormulario] = useState({
    nombre: "",
    email: "",
    contrasena: ""
  });

  const handleChange = function (e) {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(function () {
    axios
    .get("http://localhost:3001/api/administradores/" + id)
    .then(function (dato) {
      const info = dato.data;
              setFormulario({
          nombre: info.nombre,
          email: info.email,
          contrasena: info.contrasena,
        });
      });
  }, []);

  const handleSubmit = function (e) {
    e.preventDefault();
    axios
      .put("http://localhost:3001/api/administradores/" + id, formulario, {
        headers: {
          "Content-Type": "application/json",
        },
      })   
      .then(function () {
        console.log("Administrador actualizado");
        // go to products page
        window.location.href = "/IndexAdministrador";
      })
      .catch(function () {
        console.error("Error al actualizar el administrador");       
      });
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <br />
      <h1 className="text-3xl font-bold mb-4">Actualizar Usuario</h1>

      <form className="flex flex-col w-64">
        <label htmlFor="UserName" className="mb-1">Nombre</label>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre del administrador"
          onChange={handleChange}
          value={formulario.nombre}
          className="border border-gray-400 rounded p-2 mb-2"
        />
        <label htmlFor="Password" className="mb-1">Email</label>
        <input
          type="text"
          name="email"
          placeholder="email del administrador"
          onChange={handleChange}
          value={formulario.email}
          className="border border-gray-400 rounded p-2 mb-2"
        />
        <label htmlFor="contrasena" className="mb-1">Contraseña</label>
        <input
          type="text"
          name="contrasena"
          placeholder="contrasena del administrador"
          onChange={handleChange}
          value={formulario.contrasena}
          className="border border-gray-400 rounded p-2 mb-2"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-black text-white"
        >
          Actualizar
        </button>
      </form>
    </div>
  );
}


