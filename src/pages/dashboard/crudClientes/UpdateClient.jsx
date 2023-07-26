import React, { useState, useEffect } from "react";
import DashboardSidebar from "../dashboardSideBar";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function UpdateClient() {
    const { id } = useParams();
    const [formulario, setFormulario] = useState({
        nombre:"",
        email:"",
        contrasena:"",
        direccion:"", 
        ciudad:"", 
        estado:"",
        pais:""
    });
    //Se debe respetar la estructura del formulario original, a pesar de que no se haga visible en el front, para evitar conflictos
    const handleChange = function (e) {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(function () {
        axios.get(`http://localhost:3001/api/clientes/${id}`)
            .then(function (dato) {
                const info = dato.data;
                setFormulario({
                    nombre: info.nombre,
                    email: info.email,
                    contrasena:info.contrasena,
                    direccion: info.direccion,
                    ciudad: info.ciudad,
                    estado: info.estado,
                    pais: info.pais,
                });
            })
            .catch(function (error) {
                console.error("Error al obtener los datos del cliente:", error);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const cliente = JSON.stringify(formulario);
        console.log(cliente);
        axios
            .put(`http://localhost:3001/api/clientes/${id}`, formulario)  // Utiliza la variable `id` en la URL y pasa `formulario` como el cuerpo de la solicitud PUT
            .then(function () {
                console.log("Cliente actualizado exitosamente");
                // Redirige a la página de clientes o muestra un mensaje de éxito
                // window.location.href = "/Indexclientes";
            })
            .catch(function () {
                console.error("Error al actualizar el cliente");
            });
            window.location.href = "/IndexClientes"
    };

    return (
        <>
            <DashboardSidebar></DashboardSidebar>
            <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg shadow-lg">

                <form>
                    <div className="mb-4">
                        <label className="block font-medium text-gray-700">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                            onChange={handleChange}
                            value={formulario.nombre}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-medium text-gray-700">Correo electrónico</label>
                        <input
                            type="text"
                            name="email"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                            onChange={handleChange}
                            value={formulario.email}
                        />
                    </div>
                  
                    <div className="mb-4">
                        <label  className="block font-medium text-gray-700">Direccion</label>
                        <input
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                            type="text"
                            name="direccion"
                
                            onChange={handleChange}
                            value={formulario.direccion}
                        />
                    </div>
                    <div className="mb-4">
                        <label  className="block font-medium text-gray-700">Ciudad</label>
                        <input
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                            type="text"
                            name="ciudad"
                            onChange={handleChange}
                            value={formulario.ciudad}
                        />
                    </div>
                    <div className="mb-4">
                        <label  className="block font-medium text-gray-700">Estado</label>
                        <input
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                            type="text"
                            name="estado"
                            
                            onChange={handleChange}
                            value={formulario.estado}
                        />
                    </div>
                    <div className="mb-4">
                        <label  className="block font-medium text-gray-700">País</label>
                        <input
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                            type="text"
                            name="pais"
                            
                            onChange={handleChange}
                            value={formulario.pais}
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="w-full bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Actualizar
                    </button>
                </form>
            </div>
        </>
    )
}
