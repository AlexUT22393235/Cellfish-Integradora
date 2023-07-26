
import React from 'react'
import fondologin from '../assets/imagenregistro.jpg'
import Footer from './Footer';
import { Link } from "react-router-dom";

export default function Register() {
  return (

    <>
    
     <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full mt-12' >
     <div className='hidden sm:block'>
     <img className='w-full h-full object-cover' src={fondologin}></img>
     </div>
            <div className='bg-[#ffe4b8] flex flex-col justify-center'>
            <form className='max-w-[500px] w-full mx-auto bg-[#e6d1b1] p-8 px-8 rounded-lg' >

                
<h2 className='text-4xl dark:text-white font-normal'> Registrate  </h2>
<h1>Crea una cuenta para empezar a compra</h1>

         <span>
         <button className='w-full my-5 py-2 bg-yellow-50 rounded-lg'>
          <Link to={"/"}>Regresar al inicio</Link>
          </button>  
        </span>
         



    <div className='flex flex-col text-black py-2'>
        <label>Nombre </label>
  
        <input className='rounded-lg bg-yellow-50 mt-2 p-2 focus:border-[#ffe4b8]  focus:outline-none' type="text"></input>
    </div>


    <div className='flex flex-col text-black py-2'>
        <label>Correo electronico  </label>
  
        <input className='rounded-lg bg-yellow-50 mt-2 p-2 focus:border-[#ffe4b8]  focus:outline-none' type="text"></input>
    </div>




    <div className='flex flex-col text-black py-2' type>
        <p> Contraseña</p>
    
    <input className='rounded-lg bg-yellow-50 mt-2 p-2 focus:border-[#ffe4b8]  focus:outline-none' type="password"></input>
    </div>

    <div className='flex flex-col text-black py-2' type>
        <p> Confirmar contraseña</p>
    
    <input className='rounded-lg bg-yellow-50 mt-2 p-2 focus:border-[#ffe4b8]  focus:outline-none' type="password"></input>
    </div>


   
   
    
            <button className='w-full my-5 py-2 bg-yellow-50 rounded-lg'>
               Registrate
               </button>  
            

            <p className="mt-4 font-bold">
        ¿Ya tienes cuenta?{" "}
        <Link to={"/Login"} className="text-blue-700">
          Inicia sesión
        </Link>
      </p>


</form>
</div>
            
            </div>    
            <Footer></Footer>  
            </>
        );
    } 