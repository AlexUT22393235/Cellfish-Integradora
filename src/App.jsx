import { Link } from "react-router-dom";
import Card from "./components/card";
// import Navbar from "./componets/Navbar";
import "boxicons";
import Footer from "./components/Footer";

import Producto_multicard from "./components/Producto";
import Producto_multicard2 from "./components/Producto2";




export default function App() {


  return (
    <div  className="h-screen">
       {/* imagen de fondo  */}
      
      {/* <div className=" bg-fondo bg-blue-500 p-0 flex flex-col items-center justify-center gap-16 rounded-2xl h-[30rem] wx-[100rem] mx-auto">
        <h1 className="text-white font-semibold text-center">Compra buenos productos <br/> a buenos precios</h1>
        <button className="bg-gray-200">Comprar</button>
      </div> */}
      {/* <!-- component --> */}
<section class="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1585399000684-d2f72660f092?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80')] bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Encuentra lo que necesitas al precio que te mereces</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"></p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                ¡Registrate, es gratis!
            </a>
        
        </div>
    </div>
</section>

      {/* <div className="grid grid-cols-6 gap-4 pt-8 max-w-6xl m-auto">
        <Card nombre="Celulares" imagen="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
        <Card nombre="Laptops" imagen="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1120&q=80" />
        <Card nombre="Tablets" imagen={"https://images.unsplash.com/photo-1561154464-82e9adf32764?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"} />
        <Card nombre="Accesorios" imagen={"https://images.unsplash.com/photo-1572721546624-05bf65ad7679?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1973&q=80"} />
        <Card nombre="Audifonos" imagen={"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"} />
        <Card nombre="Cargadores" imagen={"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"} />
        
      </div> */}
      
      <Producto_multicard></Producto_multicard>
      <Producto_multicard2></Producto_multicard2>






    {/* <div className="flex items-center justify-center h-96 pt-20 max-w-6xl m-auto">
      <h2 className="text-6xl font-semibold text-center">Accesorios. Busca los <br/> accesorios que necesitas para <br/> tu celular</h2>
    </div> */}


    {/* <div className="flex flex-row max-w-6xl m-auto">
      <div>
        <img className="rounded-[10px_0px_0px_10px]" src="https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"></img>
      </div>
      <div className="bg-[#242424] flex flex-col items-start justify-center p-8 gap-8 rounded-[0px_10px_10px_0px]">
        <h3 className="text-4xl"><span className="text-white">Tienda.</span><span className=" text-gray-300">Compra tus productos de manera online.</span></h3>
        <button>Ver más</button>
      </div>
    </div> */}

    
<Footer></Footer>
  
    </div>
    
    
  );
}