import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UpdateUser() {
  const { id } = useParams();

  const [formulario, setFormulario] = useState({
    UserName: "",
    Password: "",
  });

  const handleChange = function (e) {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(function () {
    axios
      .get("http://localhost:3000/users/" + id)
      .then(function (dato) {
        const info = dato.data;
        setFormulario({
          UserName: info.UserName,
          Password: info.Password,
        });
      });
  }, []);

  const handleSubmit = function (e) {
    e.preventDefault();
    axios
      .patch("http://localhost:3000/users/" + id, formulario, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function () {
        console.log("User actualizado");
        // Redirigir a la página de Usuarios
        window.location.href = "/IndexUser";
      })
      .catch(function () {
        console.error("Error al actualizar el usuario");
      });
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <h1 className="text-3xl font-bold mb-4">Actualizar Usuario</h1>

      <form className="flex flex-col w-64">
        <label htmlFor="UserName" className="mb-1">Nombre</label>
        <input
          type="text"
          name="UserName"
          placeholder="Nombre del Usuario"
          onChange={handleChange}
          value={formulario.UserName}
          className="border border-gray-400 rounded p-2 mb-2"
        />
        <label htmlFor="Password" className="mb-1">Password</label>
        <input
          type="text"
          name="Password"
          placeholder="Password"
          onChange={handleChange}
          value={formulario.Password}
          className="border border-gray-400 rounded p-2 mb-2"
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-orange-500 text-white rounded p-2 mt-2"
        >
          Actualizar
        </button>
      </form>
    </div>
  );
}

