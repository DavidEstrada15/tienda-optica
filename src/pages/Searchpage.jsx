import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import useProducts from '../components/Products'
function Searchpage() {
  const location= useLocation()
 const searchvalue= location.state

 let {productos} = useProducts()
 let productosfiltrados= productos.filter(producto => producto.nombre.toLowerCase().includes(searchvalue))
  return (<>
    <Header></Header>
    <div className='lg:flex'>
    <div className='p-5'>
    <h2 className='text-3xl capitalize  py-5 font-bold'>{searchvalue}</h2>
    <p className='text-2xl hidden lg:block'>{productosfiltrados.length} resultados</p>
    
    </div>
    <section className='grid grid-cols-1 bg-white lg:bg-transparent lg:grid-cols-4  gap-5 place-self-center h-full p-5'>
       {
               productosfiltrados.map(producto =>(
                 <Link to="/Singleproduct" key={producto.id} state={producto}>
                 <article className={`bg-white place-self-center py-10 ${producto.descuento > 0 ? `after:content-['${producto.descuento}%'] after:text-blackx` : "" }`}>
                <div className='w-[70vw] h-[30vh]  lg:w-[20vw] object-cover lg:h-[30vh] place-items-center ' > 
               <img className='w-[80%] h-full' src={producto.imagen} alt={producto.imagen} /></div>
                
                <div className='flex gap-2 flex-col'><h2 className='text-center text-2xl'>{producto.nombre}</h2>
                 
                 <h4 className=' lg:text-3xl text-2xl  text-blue-400'>${producto.descuento > 0 ?  (producto.precio - (producto.descuento * producto.precio / 100)).toLocaleString('es-ES'): producto.precio.toLocaleString('es-ES')}</h4>
            
                 <p className=' line-through text-gray-500'> {producto.descuento > 0 ? "$" + producto.precio.toLocaleString('es-ES') : ""}</p></div> 
                 </article></Link>
               ))
             }
    </section></div>
    </>
  )
}

export default Searchpage