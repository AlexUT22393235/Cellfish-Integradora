
import DashboardSidebar from "../dashboardSideBar";
import React, { useState, useEffect } from "react";
import axios from "axios";

const AddProducts = () => {
    const [producto, setProducto] = useState({
        nombre: "",
        descripcion: "",
        precio: "",
        imagen: "",
    });


    const handleChange = (e) => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Realizar una solicitud PUT al servidor para actualizar el producto
        axios
            .post(`http://localhost:3001/api/productos/`, producto)
            .then((response) => {
                console.log("Producto agregado exitosamente.", response.data);
                // Aquí puedes redirigir a la página de productos o mostrar un mensaje de éxito
            })
            .catch((error) => {
                console.error("Error al actualizar el producto:", error);
            });
            window.location.href = "/IndexProductos"
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
                            value={producto.nombre}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="descripcion" className="block font-medium text-gray-700">
                            Descripción:
                        </label>
                        <textarea
                            type="text"
                            name="descripcion"
                            className="w-full px-4 py-2 mt-2 border rounded-lg resize-none focus:outline-none focus:border-blue-500"
                            rows="3"
                            required
                            onChange={handleChange}
                            value={producto.descripcion} 
                        />
                    </div>
                    <d className="mb-4"></d>
                        <label htmlFor="precio" className="block font-medium text-gray-700">
                            Precio:
                        </label>
                        <input
                            type="number"
                            name="precio"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                            onChange={handleChange}
                            value={producto.precio}
                    ></input>
                    <div className="mb-4">
                        <label htmlFor="imagen" className="block font-medium text-gray-700">
                            Imagen:
                        </label>
                        <input
                            type="text"
                            name="imagen"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                            onChange={handleChange}
                            value={producto.imagen}
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

export default AddProducts;


