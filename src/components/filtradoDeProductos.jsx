export default function FiltradoProductos(){
    const marcas = ['Marca 1', 'Marca 2', 'Marca 3', 'Marca 4'];
    const precios =['Precio 1', 'Precio 2', 'Precio 3', 'Precio 4']
    const almacenamiento = ['Almacenamiento 1', 'Almacenamiento 2', 'Almacenamiento 3',]
    return (
        
        <div className="w-1/4 mr-4 ml-8 mt-20 mx-5 p-6 flex justify-start sticky top-20 ">
            <div className="filtrado-productos-container">
                <h3 className="font-bold mb-2">Marcas</h3>
                <div className="border-b mb-4"></div>
                {marcas.map((marca, index) => (
                    <p key={index} className="mb-1">
                        <span className="font-normal">{marca}</span>
                    </p>
                ))}
                <div className="mt-19 pt-18">
                <h3 className="font-bold mb-2">Precios</h3>
                <div className="border-b mb-4"></div>
                {precios.map((precio, index) => (
                    <p key={index} className="mb-1">
                        <span className="font-normal">{precio}</span>
                    </p>
                ))}
                </div>
                <div className="mt-19 pt-18">
                <h3 className="font-bold mb-2">Almacenamiento</h3>
                <div className="border-b mb-4"></div>
                {almacenamiento.map((almacenamientos, index) => (
                    <p key={index} className="mb-1">
                        <span className="font-normal">{almacenamientos}</span>
                    </p>
                ))}
                </div>
            </div>
        </div>
        
    )
}
