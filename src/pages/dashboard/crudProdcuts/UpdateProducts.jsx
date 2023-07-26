import React, { useState, useEffect } from "react";
import DashboardSidebar from "../dashboardSideBar";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function UpdateProducts({handleProdcutoID }) {
    const { id } = useParams();
    const [formulario, setFormulario] = useState({
        nombre: "",
        descripcion: "",
        precio: "",
        imagen: "",
    });

    const handleChange = function (e) {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(function () {
        axios.get(`http://localhost:3001/api/productos/${id}`)
            .then(function (dato) {
                const info = dato.data;
                setFormulario({
                    nombre: info.nombre,
                    descripcion: info.descripcion,
                    precio: info.precio,
                    imagen: info.imagen,
                });
            })
            .catch(function (error) {
                console.error("Error al obtener los datos del producto:", error);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const producto = JSON.stringify(formulario);
        console.log(producto);
        axios
            .put(`http://localhost:3001/api/productos/${id}`, formulario)  // Utiliza la variable `id` en la URL y pasa `formulario` como el cuerpo de la solicitud PUT
            .then(function () {
                console.log("Producto actualizado exitosamente");
                // Redirige a la página de productos o muestra un mensaje de éxito
                // window.location.href = "/IndexProductos";
            })
            .catch(function () {
                console.error("Error al actualizar el producto");
            });
            window.location.href = "/IndexProductos"
    };

    return (
        <>
            <DashboardSidebar></DashboardSidebar>
            <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg shadow-lg">

                <form>
                    <div className="mb-4">
                        <label htmlFor="nombre" className="block font-medium text-gray-700">Nombre</label>
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre del producto"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                            onChange={handleChange}
                            value={formulario.nombre}
                        />
                    </div>
                    <div className="mb-4">
                        <label>Descripcion</label>
                        <input
                            type="text"
                            name="descripcion"
                            placeholder="Descripcion del producto"
                            className="w-full px-4 py-2 mt-2 border rounded-lg resize-none focus:outline-none focus:border-blue-500"
                            onChange={handleChange}
                            value={formulario.descripcion}
                        />
                    </div>
                    <div className="mb-4">
                        <label>Precio</label>
                        <input
                            type="number"
                            name="precio"
                            placeholder="Precio del producto"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                            onChange={handleChange}
                            value={formulario.precio}
                        />
                    </div>
                    <div className="mb-4">
                        <label>Imagen</label>
                        <input
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                            type="text"
                            name="imagen"
                            placeholder="Imagen del producto"
                            onChange={handleChange}
                            value={formulario.imagen}
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
