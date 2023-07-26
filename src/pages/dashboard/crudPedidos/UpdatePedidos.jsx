import React, { useState, useEffect } from "react";
import DashboardSidebar from "../dashboardSideBar";
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function UpdatePedidos({ }) {
    const { id } = useParams();
    const [formulario, setFormulario] = useState({
        id_cliente: "",
        fecha:"",
        total:""
    });

    const handleChange = function (e) {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(function () {
        axios.get(`http://localhost:3001/api/pedidos/${id}`)
            .then(function (dato) {
                const info = dato.data;
                setFormulario({
                    id_cliente:info.id_cliente,
                    fecha:info.fecha,
                    total:info.total,
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
            .put(`http://localhost:3001/api/pedidos/${id}`, formulario)  // Utiliza la variable `id` en la URL y pasa `formulario` como el cuerpo de la solicitud PUT
            .then(function () {
                console.log("Pedido actualizado exitosamente");
                // Redirige a la página de pedidos o muestra un mensaje de éxito
                // window.location.href = "/Indexpedidos";
            })
            .catch(function () {
                console.error("Error al actualizar el pedido");
            });
            window.location.href = "/IndexPedidos"
    };

    return (
        <>
            <DashboardSidebar></DashboardSidebar>
            <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg shadow-lg">

                <form>
              <div className="mb-4">
                        <label>ID_CLIENTE</label>
                        <input
                            type="number"
                            name="id_cliente"
                        
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                            onChange={handleChange}
                            value={formulario.id_cliente}
                        />
                    </div>
                    <div className="mb-4">
                        <label>Total</label>
                        <input
                            type="number"
                            name="total"
                            
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                            onChange={handleChange}
                            value={formulario.total}
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
