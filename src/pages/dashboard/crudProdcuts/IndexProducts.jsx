
import DashboardSidebar from "../dashboardSideBar";
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function IndexProducts() {
   
    const [productos, setProductos] = useState([]);



    //V.1

    useEffect(() => {
        // Realizar la solicitud GET a la API utilizando Axios
        axios.get('http://localhost:3001/api/productos')
            .then(response => setProductos(response.data))
            .catch(error => console.error('Error al obtener los datos:', error));
    }, []);


    const handleEliminarProducto = (id) => {
        // Verificar la URL antes de hacer la solicitud DELETE
        console.log(`URL para eliminar el producto con ID ${id}: http://localhost:3001/api/productos/${id}`);
        // Realizar la solicitud DELETE a la API utilizando Axios
        axios.delete(`http://localhost:3001/api/productos/${id}`)
            .then(response => {
                // Actualizar la lista de productos después de eliminar el producto
                setProductos(prevProductos => prevProductos.filter(producto => producto.id !== id));
            })
            .catch(error => console.error('Error al eliminar el producto:', error));
            window.location.href = "/IndexProductos"
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
                                Descripcion
                            </th>
                            <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                Precio
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Imagen
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

                        {productos.map((producto) => (
                        


                            <tr key={producto.id_producto} className="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    {producto.id_producto}
                                </th>
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    {producto.nombre}
                                </th>
                                <td className="px-6 py-4">
                                    {producto.descripcion}
                                </td>
                                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                    {producto.precio}
                                </td>
                                <td className="px-6 py-4">
                                    {producto.imagen}
                                </td>
                                <td className="px-6 py-4">
                                    {/* Botón para Actualizar */}
                                    <Link  to={`/ActualizarProducto/${producto.id_producto}`}>
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
                                            console.log("ID del producto a eliminar:", producto.id_producto);
                                            handleEliminarProducto(producto.id_producto);
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
                <Link to="/CrearProducto">
                <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 mt-5">Crear nuevo producto</button>
                </Link>
            </div>
        
        </>
    )
}