import React from 'react'
import useProducts from './Products'
import { Link } from 'react-router-dom'
function Offerts() {
   let {productos} = useProducts()
   let productosfiltrados = productos.filter(producto => producto.descuento > 0)
   console.log(productosfiltrados)
    return (
      <><section className='bg-gray-200 p-20 lg:overflow-x-scroll'>
        <h2 className='text-3xl p-10'>Ofertas permanentes</h2>
        <article className='flex gap-5 py-5 w-full flex-col lg:flex-row place-content-center'>
          {
            productosfiltrados.map(producto =>(
              <Link to="/Singleproduct" key={producto.id} state={producto}>
              <article className="bg-white flex flex-col gap-5 place-self-center  h-[70vh] ">
                {producto.descuento > 0 ? <span className='bg-red-600 py-5 px-10 text-white place-self-end'>{producto.descuento}% <br />  Dto.</span> : ""}
             <div className='w-[70vw] h-[30vh]  lg:w-[20vw] object-cover lg:h-[30vh] place-items-center ' > 
            <img className='w-full h-full' src={producto.imagen} alt={producto.imagen} /></div>
             
             <div className='flex gap-2 flex-col text-center'><h2 className='text-center text-2xl'>{producto.nombre}</h2>
              
              <h4 className=' lg:text-3xl text-2xl  text-blue-400'>${producto.descuento > 0 ?  (producto.precio - (producto.descuento * producto.precio / 100)).toLocaleString('es-ES'): producto.precio.toLocaleString('es-ES')}</h4>
         
              <p className=' line-through text-gray-500'> {producto.descuento > 0 ? "$" + producto.precio.toLocaleString('es-ES') : ""}</p></div> 
              </article></Link>
            ))
          }
        </article>
          </section></>
    )
}

export default Offerts