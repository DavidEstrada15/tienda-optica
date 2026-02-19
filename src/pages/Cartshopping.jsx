import React from 'react'
import Header from "../components/Header"
import { Link } from 'react-router-dom'
function Cartshopping() {
  const productos= JSON.parse(localStorage.getItem("Cartglass")) || []
  const calcularprecio =  
productos.reduce((acumulador, producto) =>
 acumulador + (producto.precio - (producto.descuento * producto.precio / 100)),0

)

const HandleBuy= () =>{
    localStorage.setItem("Cartglass", JSON.stringify([]))
  alert("Compra realizada!")
  location.reload()

}
  return (
    <>
    <Header></Header>
    <h2 className='text-3xl p-10 place-self-center'>Tienes {productos.length} productos</h2>
    <div className='grid grid-cols-1 lg:grid-cols-3'>
    {
      
      productos.map(producto => (
      <Link to="/Singleproduct" key={producto.id} state={producto}>
            <article className='bg-white place-self-center py-10 place-content-center'>
           <div className='w-[70vw] h-[30vh]  lg:w-full object-cover lg:h-[30vh] place-items-center ' > 
          <img className='w-[80%] h-full place-self-center' src={producto.imagen} alt={producto.imagen} /></div>
           
           <div className='flex gap-2 flex-col text-center'><h2 className='text-center text-2xl'>{producto.nombre}</h2>
            <h4 className=' lg:text-3xl  text-blue-400'>${producto.descuento > 0 ?  (producto.precio - (producto.descuento * producto.precio / 100)).toLocaleString('es-ES'): producto.precio.toLocaleString('es-ES')}</h4>
       
            <p className=' line-through text-gray-500'> {producto.descuento > 0 ? "$" + producto.precio.toLocaleString('es-ES') : ""}</p>
         </div> 
            </article></Link>
          ))
    }
     
    </div>
    <div className='flex flex-col gap-5 p-5'>
    <h2 className='text-3xl place-self-center'>Tu gasto es {calcularprecio.toLocaleString('es-ES')}</h2>
    <button style={productos != [] ? {display: "none"} : {display: "flex"}} className='text-3xl bg-blue-600 place-self-center cursor-pointer py-2 rounded-2xl px-10' onClick={HandleBuy}>Hacer compra</button></div>
    </>
  )
}

export default Cartshopping