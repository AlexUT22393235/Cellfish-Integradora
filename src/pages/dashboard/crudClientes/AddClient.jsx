
import DashboardSidebar from "../dashboardSideBar";
import React, { useState, useEffect } from "react";
import axios from "axios";

const AddClients = () => {
    const [cliente, setCliente] = useState({
        nombre:"",
        email:"",
        contrasena:"",
        direccion:"", 
        ciudad:"", 
        estado:"",
        pais:""
    });


    const handleChange = (e) => {
        setCliente({
            ...cliente,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Realizar una solicitud PUT al servidor para actualizar el cliente
        axios
            .post(`http://localhost:3001/api/clientes/`, cliente)
            .then((response) => {
                console.log("cliente agregado exitosamente.", response.data);
                // Aquí puedes redirigir a la página de clientes o mostrar un mensaje de éxito
            })
            .catch((error) => {
                console.error("Error al actualizar el cliente:", error);
            });
            window.location.href = "/Indexclientes"
    };

    return (

        <>
        <DashboardSidebar></DashboardSidebar>
            <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg shadow-lg">
                <form>
                    <div className="mb-4">
                        <label htmlFor="nombre" className="block font-medium text-gray-700">
                            Nombre:
                        </label>
                        <input
                            type="text"
                            name="nombre"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                            onChange={handleChange}
                            value={cliente.nombre}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium text-gray-700">
                            Correo electrónico:
                        </label>
                        <input
                            type="text"
                            name="email"
                            className="w-full px-4 py-2 mt-2 border rounded-lg resize-none focus:outline-none focus:border-blue-500"
                            rows="3"
                            required
                            onChange={handleChange}
                            value={cliente.email} 
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="contrasena" className="block font-medium text-gray-700">
                            Contraseña:
                        </label>
                        <input
                            type="password"
                            name="contrasena"
                            className="w-full px-4 py-2 mt-2 border rounded-lg resize-none focus:outline-none focus:border-blue-500"
                            rows="3"
                            required
                            onChange={handleChange}
                            value={cliente.contrasena} 
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="direccion" className="block font-medium text-gray-700">
                            Dirección:
                        </label>
                        <input
                            type="text"
                            name="direccion"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                            onChange={handleChange}
                            value={cliente.direccion}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="ciudad" className="block font-medium text-gray-700">
                            Ciudad:
                        </label>
                        <input
                            type="text"
                            name="ciudad"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                            onChange={handleChange}
                            value={cliente.ciudad}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="estado" className="block font-medium text-gray-700">
                            Estado:
                        </label>
                        <input
                            type="text"
                            name="estado"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                            onChange={handleChange}
                            value={cliente.estado}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="pais" className="block font-medium text-gray-700">
                            País:
                        </label>
                        <input
                            type="text"
                            name="pais"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                            onChange={handleChange}
                            value={cliente.pais}
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="w-full bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Aceptar
                    </button>
                </form>
            </div>
        </>
        
    );
};

export default AddClients;


