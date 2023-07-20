import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function IndexUser() {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    // Lógica para obtener los usuarios de la base de datos al cargar el componente
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users');
      setUsers(response.data);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      // Enviar solicitud DELETE a la API para eliminar el usuario
      await axios.delete(`http://localhost:3000/users/${id}`);
      // Actualizar la lista de usuarios eliminando el usuario del estado local
      setUsers((prevUsers) => prevUsers.filter((user) => user.PkUser !== id));
      alert("Usuario eliminado correctamente.");
    } catch (error) {
      console.error("Error al eliminar el usuario:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-end mb-5">
          <Link to="/AddUser" className="btn btn-success">
            <i className="fas fa-user"></i> Nuevo
          </Link>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-blue-500 text-white">
                <th className="px-6 py-4 text-lg">Nombre</th>
                <th className="px-6 py-4 text-lg">Contraseña</th>
                <th className="px-6 py-4 text-lg">Fecha</th>
                <th className="px-6 py-4 text-lg">Acciones</th>
              </tr>
            </thead>    
            <tbody>
              {Users.map((user) => (
                <tr key={user.PkUser}>
                  <td className="px-6 py-4">{user.UserName}</td>
                  <td className="px-6 py-4">{user.Password}</td>
                  <td className="px-6 py-4">{user.Create}</td>
                  <td className="px-6 py-4">
                  <Link to={`/UpdateUser/${user.PkUser}`} className="btn btn-success">
                <i className="fas fa-user"></i> Editar</Link>
                    <button className="btn btn-orange " onClick={() => handleDeleteUser(user.PkUser)}>Eliminar</button>
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

export default IndexUser;

