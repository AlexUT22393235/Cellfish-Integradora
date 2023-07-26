
import DashboardSidebar from "../dashboardSideBar";
import React, { useState, useEffect } from "react";
import axios from "axios";

const AddPedidos = () => {
    const [pedido, setPedido] = useState({
        id_cliente: "",
        fecha:"",
        total:""
    });


    const handleChange = (e) => {
        setPedido({
            ...pedido,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Realizar una solicitud PUT al servidor para actualizar el pedido
  axios
            .post(`http://localhost:3001/api/pedidos/`, pedido)
            .then((response) => {
                console.log("Pedido agregado exitosamente.", response.data);
                // Aquí puedes redirigir a la página de pedidos o mtrar un mensaje de éxito
            })
            .catch((error) => {
                console.error("Error al actualizar el pedido:", error);
            });
            window.location.href = "/IndexPedidos"
    };

    return (

        <>
        <DashboardSidebar></DashboardSidebar>
            <div className="max-w-md mx-auto mt-8 p-6 border rounded-lg shadow-lg">
                <form>
                    <div className="mb-4">
                        <label htmlFor="id_cliente" className="block font-medium text-gray-700">
                            ID_CLIENTE
                        </label>
                        <input
                            type="number"
                            name="id_cliente"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                            onChange={handleChange}
                            value={pedido.id_cliente}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="total" className="block font-medium text-gray-700">
                            Total
                        </label>
                        <input
                            type="number"
                            name="total"
                            className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required
                            onChange={handleChange}
                            value={pedido.total}
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

export default AddPedidos;


