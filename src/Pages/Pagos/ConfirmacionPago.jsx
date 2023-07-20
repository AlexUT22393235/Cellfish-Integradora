import { useState } from 'react'

import QuantityWrapper from '../../components/QuantityWrapper';
import "boxicons";



function App() {

  return (
    <>
    {/* Elemnto 1 */}
     <div>
      <h2 className='font-serif font-display text-[40px] font-bold'>El total de tu compra es: </h2>
      <h3 className='font-serif Aleo'>Obtén envío y devoluciones sin costo en todos los pedidos.</h3>
      <br />
      <button className='bg-blue-500 text-white font-serif Aleo py-2 px-24 mx-auto rounded'>Pagar</button>
      </div>    
      <br />
      <div class="border"></div>
      <br />
      
{/* Elemento 2 */}
      <div className='flex flex-row'>
      <img src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-midnight-select-202203?" width="150" />
      <div className="flex items-center justify-center">
  <div className='flex flex-row m-4 '>
    <h3 className="font-serif font-display text-2xl font-semibold ">iPhone SE de 64 GB Azul medianoche</h3>
  </div>
  <div className="ml-4">
    <QuantityWrapper />
  </div>
  <div className='font-serif Aleo text-[25px] ml-4'>
    <p>$11,499.00</p>
    <button className='underline font-serif Aleo text-center text-[15px] text-blue-600'>Eliminar</button>
  </div>  
</div>
      </div>

      {/* Elemento 3 */}
      <div className='flex flex-row'>
      <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXVkaWZvbm9zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" width="150" />
      <div className="flex items-center justify-center">
  <div className='flex flex-row m-4 '>
    <h3 className="font-serif font-display text-2xl font-semibold ">Audifonos JBL maxima potencia</h3>
  </div>
  <div className="ml-4">
    <QuantityWrapper />
  </div>
  <div className='font-serif Aleo text-[25px] ml-4'>
    <p>$9,560.00</p>
    <button className='underline font-serif Aleo text-center text-[15px] text-blue-600'>Eliminar</button>
  </div>  
</div>
      </div>
      <br />

      {/* Elemento 2 */}
      <div className='flex flex-row'>
      <img src="https://media.istockphoto.com/id/1394988455/es/foto/port%C3%A1til-con-pantalla-en-blanco-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=9bGhsdR3oYjaqMSRSKHScOQmSAmJZOjsWc8nQKPkvXU=" width="250" />
      <div className="flex items-center justify-center">
  <div className='flex flex-row m-4 '>
    <h3 className="font-serif font-display text-2xl font-semibold ">iPhone SE de 64 GB Azul medianoche</h3>
  </div>
  <div className="ml-4">
    <QuantityWrapper />
  </div>
  <div className='font-serif Aleo text-[25px] ml-4'>
    <p>$11,499.00</p>
    <button className='underline font-serif Aleo text-center text-[15px] text-blue-600'>Eliminar</button>
  </div>  
</div>
      </div>
    

    {/* Elemento 4 */}
      <div class="border"></div>

      <br />
      <div className='w-100 h-100'>
  <h3 className='font-serif font-display text-[20] font-semibold'>Agrega AppleCare+ para el iPhone SE (tercera generación) por $2,199.00</h3>
<p className=''>
  <ul className='font-serif Aleo list-disc list-inside text-left-10 '>
    <li>Reparaciones ilimitadas para incidentes por daño accidental</li>
    <li>Reparaciones certificadas por Apple con piezas originales</li>
    <li>Acceso prioritario a los expertos en Apple</li>
  </ul>
  </p>
  <button className='bg-blue-500 text-white font-serif Aleo py-2 px-24 mx-auto rounded'>Agregar</button>
</div>
<br />
{/* Elemento 5 */}
<div class="border"></div>
<br />
<div>
  <div className='flex flex-row font-serif font-display text-[15px] justify-center '>
<box-icon name='package'></box-icon>
  <h3> Haz tu pedido hoy mismo. Entregar en 96536</h3>
  </div>
  <h4 className=' font-serif Aleo font-semibold '>Tu pedido llega: Lun. 10 Jul — Gratis</h4>
</div>
<br />
{/* Elemento 5 */}
<div class="border"></div>
<br />
<div className='flex flex-row text-left justify-between items-center font-serif font-display text-[20px]'>
  <div><h2>Subtotal</h2></div>
  <div><h2>$20,456.00</h2></div>
</div>

<div className='flex flex-row text-left justify-between items-center font-serif font-display text-[20px]'>
  <div><h2>Envio</h2></div>
  <div><h2>Gratis</h2></div>
</div>
<br />
{/* Elemento 6 */}
<div class="border"></div>
<br />
<div className='flex flex-row text-left justify-between items-center font-serif font-display text-[30px] font-semibold'>
<div><h2>Tu total: </h2></div>
<div><h2>$20,456.0 </h2></div>
</div>
<h3 className='text-gray-600 selection:font-serif font-display text-[15px] text-right'>Incluye el IVA de $1,586.07</h3>
<div className="flex justify-end">
  <button className="bg-blue-500 text-white font-serif Aleo py-2 px-4 rounded">Pagar</button>
</div>

    </>
  )
}

export default App