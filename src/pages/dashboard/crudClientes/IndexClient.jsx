
import DashboardSidebar from "../dashboardSideBar";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function IndexClient() {
   
    const [clientes, setclientes] = useState([]);

    //V.1

    useEffect(() => {
        // Realizar la solicitud GET a la API utilizando Axios
        axios.get('http://localhost:3001/api/clientes')
            .then(response => setclientes(response.data))
            .catch(error => console.error('Error al obtener los datos:', error));
    }, []);


    const handleEliminarCliente = (id) => {
        // Verificar la URL antes de hacer la solicitud DELETE
        console.log(`URL para eliminar el cliente con ID ${id}: http://localhost:3001/api/clientes/${id}`);
        // Realizar la solicitud DELETE a la API utilizando Axios
        axios.delete(`http://localhost:3001/api/clientes/${id}`)
            .then(response => {
                // Actualizar la lista de clientes después de eliminar el cliente
                setclientes(prevclientes => prevclientes.filter(cliente => cliente.id !== id));
            })
            .catch(error => console.error('Error al eliminar el cliente:', error));
            window.location.href = "/Indexclientes"
    };

  

    return (
        <>
            <DashboardSidebar></DashboardSidebar>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-4 sm:ml-64">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Correo electrónico
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Dirección 
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ciudad
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Estado
                            </th>
                            <th scope="col" className="px-6 py-3">
                                País
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Actualizar
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Eliminar
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {clientes.map((cliente) => (
                        


                            <tr key={cliente.id_cliente} className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    {cliente.id_cliente}
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    {cliente.nombre}
                                </th>
                                <td className="px-6 py-4">
                                    {cliente.direccion}
                                </td>
                                <td className="px-6 py-4">
                                    {cliente.email}
                                </td>
                                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                    {cliente.ciudad}
                                </td>
                                <td className="px-6 py-4">
                                    {cliente.estado}
                                </td>
                                <td className="px-6 py-4">
                                    {cliente.pais}
                                </td>
                                <td className="px-6 py-4">
                                    {/* Botón para Actualizar */}
                                    <Link  to={`/ActualizarCliente/${cliente.id_cliente}`}>
                                    <button className="text-blue-600 dark:text-blue-400"
                                   >
                                        <i className='bx bx-pencil'><box-icon name='edit' type='solid' ></box-icon></i>
                                    </button>
                                    </Link>
                                </td>

                                <td className="px-6 py-4">
                                    {/* Botón para Eliminar */}
                                    <button
                                        className="text-red-600 dark:text-red-400"
                                        onClick={() => {
                                            console.log("ID del cliente a eliminar:", cliente.id_cliente);
                                            handleEliminarCliente(cliente.id_cliente);
                                        }}
                                    >
                                        <box-icon type='solid' name='trash-alt'></box-icon>
                                    </button>
                                </td>

                                {/* Renderizar más columnas según los datos de tu API */}
                            </tr>

                        ))}



                    </tbody>
                </table>
                <Link to="/CrearCliente">
                <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 mt-5">Crear nuevo cliente</button>
                </Link>
            </div>
        
        </>
    )
}