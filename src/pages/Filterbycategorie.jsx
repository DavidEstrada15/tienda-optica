import React from 'react'
import Header from "../components/Header"
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'
import useProducts from '../components/Products'
import { Link } from 'react-router-dom'
function Filterbycategorie() {
    let location= useLocation()
    let categoria= location.state
    let {productos} = useProducts()
    let productosfiltrados= productos.filter(producto => producto.categoria == categoria)
  return (
    <><Header></Header>
    <section className=''>
<h2 className='p-2 font-bold text-3xl'>{categoria}</h2><div className='grid grid-cols-1 lg:grid-cols-3'>
{
  productosfiltrados.map(producto => (
      <Link to="/Singleproduct" key={producto.id} state={producto}>
            <article className='bg-white place-self-center py-10'>
           <div className='w-[70vw] h-[30vh]  lg:w-[20vw] object-cover lg:h-[30vh] place-items-center ' > 
          <img className='w-[80%] h-full' src={producto.imagen} alt={producto.imagen} /></div>
           
           <div className='flex gap-2 flex-col text-center'><h2 className='text-center text-2xl'>{producto.nombre}</h2>
            <h4 className=' lg:text-3xl  text-blue-400'>${producto.descuento > 0 ?  (producto.precio - (producto.descuento * producto.precio / 100)).toLocaleString('es-ES'): producto.precio.toLocaleString('es-ES')}</h4>
       
            <p className=' line-through text-gray-500'> {producto.descuento > 0 ? "$" + producto.precio.toLocaleString('es-ES') : ""}</p>
         </div> 
            </article></Link>
          ))
}</div>
    </section>
    <Footer></Footer>
    </>
  )
}

export default Filterbycategorie