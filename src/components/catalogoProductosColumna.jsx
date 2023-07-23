import React from "react";

const CatalogoProductosColumna = () => {
    // Datos de ejemplo para las cards
    const productos = [
        { id: 1, imagenUrl: "https://images.unsplash.com/photo-1570891836654-d4961a7b6929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", titulo: "Producto 1", precio: 10.99 },
        { id: 2, imagenUrl: "https://images.unsplash.com/photo-1570891836654-d4961a7b6929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", titulo: "Producto 2", precio: 19.99 },
        { id: 3, imagenUrl: "https://images.unsplash.com/photo-1570891836654-d4961a7b6929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", titulo: "Producto 3", precio: 15.99 },
        { id: 4, imagenUrl: "https://images.unsplash.com/photo-1570891836654-d4961a7b6929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", titulo: "Producto 3", precio: 15.99 },
        { id: 5, imagenUrl: "https://images.unsplash.com/photo-1570891836654-d4961a7b6929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", titulo: "Producto 1", precio: 10.99 },
        { id: 6, imagenUrl: "https://images.unsplash.com/photo-1570891836654-d4961a7b6929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", titulo: "Producto 2", precio: 19.99 },
        { id: 7, imagenUrl: "https://images.unsplash.com/photo-1570891836654-d4961a7b6929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", titulo: "Producto 3", precio: 15.99 },
        { id: 8, imagenUrl: "https://images.unsplash.com/photo-1570891836654-d4961a7b6929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", titulo: "Producto 3", precio: 15.99 },
        { id: 9, imagenUrl: "https://images.unsplash.com/photo-1570891836654-d4961a7b6929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", titulo: "Producto 1", precio: 10.99 },
        { id: 10, imagenUrl: "https://images.unsplash.com/photo-1570891836654-d4961a7b6929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", titulo: "Producto 2", precio: 19.99 },
        { id: 11, imagenUrl: "https://images.unsplash.com/photo-1570891836654-d4961a7b6929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", titulo: "Producto 3", precio: 15.99 },
        { id: 12, imagenUrl: "https://images.unsplash.com/photo-1570891836654-d4961a7b6929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", titulo: "Producto 3", precio: 15.99 },
        { id: 13, imagenUrl: "https://images.unsplash.com/photo-1570891836654-d4961a7b6929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", titulo: "Producto 1", precio: 10.99 },
        { id: 14, imagenUrl: "https://images.unsplash.com/photo-1570891836654-d4961a7b6929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", titulo: "Producto 2", precio: 19.99 },
        { id: 15, imagenUrl: "https://images.unsplash.com/photo-1570891836654-d4961a7b6929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", titulo: "Producto 3", precio: 15.99 },
        { id: 16, imagenUrl: "https://images.unsplash.com/photo-1570891836654-d4961a7b6929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", titulo: "Producto 3", precio: 15.99 },
        // Agrega más objetos de producto según sea necesario

    ];

    return ( 
        <div className="flex justify-center">
       
            <div className="max-w-2x1 px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 mx-50"> {/*ml-20 y max-w-2x1*/}

            
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                
                    {productos.map((producto) => (
                        <div key={producto.id} className="bg-white rounded-lg p-4 flex flex-col w-60">
                            <img src={producto.imagenUrl} alt={producto.titulo} className="w-full h-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">{producto.titulo}</h3>
                            <p className="text-gray-500">${producto.precio}</p>
                        </div>
                    ))}
                    </div>
                
            </div>
        </div>
        
    );
};


export default CatalogoProductosColumna;
