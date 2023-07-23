import Footer from "./Footer";

const Categorias = () => {
    // Datos de ejemplo para las cards
    const categoriasPrincipales = [
        { id: 1, imagenUrl: "https://images.unsplash.com/photo-1570891836654-d4961a7b6929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", titulo: "Producto 1", precio: 10.99 },
        { id: 2, imagenUrl: "https://images.unsplash.com/photo-1570891836654-d4961a7b6929?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", titulo: "Producto 2", precio: 19.99 }
    ]
    return ( 
        <>
       
            <div className="max-w-2x1 px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 mx-50 flex justify-center"> {/*ml-20 y max-w-2x1*/}

            
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                
                    {categoriasPrincipales.map((categoriasPrincipales) => (
                        <div key={categoriasPrincipales.id} className="bg-white rounded-lg p-4 flex flex-col w-60">
                            <img src={categoriasPrincipales.imagenUrl} alt={categoriasPrincipales.titulo} className="w-full h-auto mb-4" />
                            <h3 className="text-lg font-semibold mb-2">{categoriasPrincipales.titulo}</h3>
                            <p className="text-gray-500">${categoriasPrincipales.precio}</p>
                        </div>
                    ))}
                    </div>
                
            </div>
           <Footer></Footer>
            </>
        
    );


}

export default Categorias;