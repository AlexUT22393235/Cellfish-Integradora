
import DashboardSidebar from "../dashboardSideBar";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function IndexPedidos() {
   
    const [pedidos, setPedidos] = useState([]);



    //V.1

    useEffect(() => {
        // Realizar la solicitud GET a la API utilizando Axios
        axios.get('http://localhost:3001/api/pedidos')
            .then(response => setPedidos(response.data))
            .catch(error => console.error('Error al obtener los datos:', error));
    }, []);


    const handleEliminarPedido = (id) => {
        // Verificar la URL antes de hacer la solicitud DELETE
        console.log(`URL para eliminar el pedido con ID ${id}: http://localhost:3001/api/pedidos/${id}`);
        // Realizar la solicitud DELETE a la API utilizando Axios
        axios.delete(`http://localhost:3001/api/pedidos/${id}`)
            .then(response => {
                // Actualizar la lista de pedidos después de eliminar el Pedido
                setPedidos(prevpedidos => prevpedidos.filter(pedido => pedido.id !== id));
            })
            .catch(error => console.error('Error al eliminar el pedido:', error));
            window.location.href = "/IndexPedidos"
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
                                id_cliente
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Fecha de creación
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Total
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

                        {pedidos.map((pedido) => (
                        


                            <tr key={pedido.id_pedido} className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    {pedido.id_pedido}
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    {pedido.id_cliente}
                                </th>
                                <td className="px-6 py-4">
                                    {pedido.fecha}
                                </td>
                                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                    {pedido.total}
                                </td>
            
                                <td className="px-6 py-4">
                                    {/* Botón para Actualizar */}
                                    <Link  to={`/ActualizarPedido/${pedido.id_pedido}`}>
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
                                            console.log("ID del pedido a eliminar:", pedido.id_pedido);
                                            handleEliminarPedido(pedido.id_pedido);
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
                <Link to="/CrearPedido">
                <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 mt-5">Crear nuevo pedido</button>
                </Link>
            </div>
        
        </>
    )
}