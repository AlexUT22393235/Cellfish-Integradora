import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Administradores1 from '../assets/Administradores1.jpg';
import Footer from './Footer';

export default function AdministradoresLogin() {

    const [adminName, setAdminName] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
  
    // Función para manejar el envío del formulario
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Aquí puedes realizar la validación de los datos ingresados
      // Por ejemplo, si el nombre de administrador es 'admin' y la contraseña es '123', se considerará un login exitoso
      if (adminName === 'admin@gmail.com' && password === 'admin123') {
        navigate('/dashboard'); // Redirige a la ruta especificada
      }
    };
    // Si ya estás logueado, redirige a otra ruta/componente
    if (loggedIn) {
      return <Redirect to="/dashboard" />; // Cambia "/dashboard" por la ruta que deseas redireccionar después de iniciar sesión
    }
    return (
        <>
    <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full mt-12'>
      <div className='hidden sm:block'>
        <img className='w-full h-full object-cover' src={Administradores1} alt="fondo"></img>
      </div>
      <div className='bg-[#ffe4b8] flex flex-col justify-center'>
        <form className='max-w-[500px] w-full mx-auto bg-[#e6d1b1] p-8 px-8 rounded-lg' onSubmit={handleSubmit}>
          <h2 className='text-4xl dark:text-white font-normal'>Administrador</h2>
          <div className='flex flex-col text-black py-2'>
            <label>Nombre de administrador</label>
            <input className='rounded-lg bg-yellow-50 mt-2 p-2 focus:border-[#ffe4b8]  focus:outline-none' type="text" value={adminName} onChange={(e) => setAdminName(e.target.value)} />
          </div>

          <div className='flex flex-col text-black py-2'>
            <label>Contraseña</label>
            <input className='rounded-lg bg-yellow-50 mt-2 p-2 focus:border-[#ffe4b8]  focus:outline-none' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button className='w-full my-5 py-2 bg-yellow-50 rounded-lg' type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );



            <Footer />
        </>
    );
}