import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Administrador from "./Administrador";

function IndexAdministrador() {
  const [Administradores, setAdministradores] = useState([]);

  useEffect(() => {
    // Lógica para obtener los usuarios de la base de datos al cargar el componente
    fetchAdministradores();
  }, []);

  const fetchAdministradores = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/administradores');
      setAdministradores(response.data);
    } catch (error) {
      console.error("Error al obtener Administradores:", error);
    }
  };

  const handleDeleteAdministrador = async (id) => {
    try {
      // Enviar solicitud DELETE a la API para eliminar el usuario
      await axios.delete(`http://localhost:3001/api/administradores/:id`);
      // Actualizar la lista de usuarios eliminando el usuario del estado local
      setAdministradores((prevAdministradores) => prevAdministradores.filter((administrador) => administrador.PkAdministrador !== id));
      alert("Administrador eliminado correctamente.");
    } catch (error) {
      console.error("Error al eliminar el administrador:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-end mb-5">
          <Link to="/AddAdministrador" className="btn btn-success">
            <i className="fas fa-administrador"></i> Nuevo
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="px-6 py-4 text-lg">Nombre</th>
                <th className="px-6 py-4 text-lg">email</th>
                <th className="px-6 py-4 text-lg">contasena</th>
                <th className="px-6 py-4 text-lg">Acciones</th>
              </tr>
            </thead>    
            <tbody>
              {Administradores.map((administrador) => (
                <tr key={administrador.Pkadministrador}>
                  <td className="px-6 py-4">{administrador.nombre}</td>
                  <td className="px-6 py-4">{administrador.email}</td>
                  <td className="px-6 py-4">{administrador.contrasena}</td>
                  <td className="px-6 py-4">
                  <Link to={`/UpdateAdministrador/${administrador.Pkadministrador}`} className="btn btn-success">
                <i className="fas fa-administrador"></i> Editar</Link>
                    <button className="btn btn-orange " onClick={() => handleDeleteAdministrador(administrador.PkAdministrador)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default IndexAdministrador;

