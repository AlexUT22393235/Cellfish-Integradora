import React from "react";

const Card = ({ descripcion, imagenUrl, precio }) => {
    return (
        <div className="bg-white rounded-lg p-4 flex flex-col w-60">
            <img src={imagenUrl} alt={descripcion} className="w-full h-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">{descripcion}</h3>
            <p className="text-gray-500">${precio}</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-auto">
                Comprar
            </button>
        </div>
    );
};

export default Card;
