import React from 'react'
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx"
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
function Singleproduct() {
    const location = useLocation()

    const producto= location.state
  const navigate= useNavigate()
  const redireccion= () => {
    
    navigate('/Cartshopping', {replace:true})
   }
    const handleAddProduct = () =>{
      if (localStorage.getItem("Cartglass") != null) {
        let productosactualizados= JSON.parse(localStorage.getItem("Cartglass"))
        let productosactu2= [...productosactualizados, producto]
        localStorage.setItem("Cartglass", JSON.stringify(productosactu2))
      }else{
        localStorage.setItem("Cartglass", JSON.stringify([producto]))
      }
redireccion()
    }
    window.scrollTo({top:0, behavior: 'smooth'})
  return (
    <>
    <Header></Header>
    <main>
      <div className='flex py-5 flex-col gap-5 lg:hidden'>
        <p className='text-center text-blue-700 p-10   place-content-center'><Link to="/">Inicio</Link> | <Link to={"/Filterbycategorie"} state={producto.categoria}> {producto.categoria}</Link> | {producto.nombre}</p>
        <h2 className='p-5 font-bold text-3xl'>{producto.nombre}</h2>
        <div className='w-full'>
           {producto.descuento > 0 ? <span className='bg-red-600 py-2 px-10 absolute text-white place-self-end'>{producto.descuento}% <br />  Dto.</span> : ""}
          <img  src={producto.imagen} alt="" />
          
        </div>
        
        <div className='flex justify-between'> <p className='text-blue-400 text-2xl'>${producto.precio}</p>
        <p className='text-2xl'>{producto.stock} unidades</p></div>
   
        <button onClick={handleAddProduct} className='px-5 py-5 border-2 border-black rounded-2xl bg-gray-300 place-self-center'>Agregar al carrito</button>
     </div>
        <p className='text-center text-blue-700 hidden p-10 lg:flex'><Link to="/">Inicio</Link> | <Link to={"/Filterbycategorie"} state={producto.categoria}> {producto.categoria}</Link> | {producto.nombre}</p>
       <div className='hidden lg:flex  py-5 gap-5'>
        <div className='w-full'>
           {producto.descuento > 0 ? <span className='bg-red-600 py-5 px-10 absolute text-white place-self-end'>{producto.descuento}% <br />  Dto.</span> : ""}
          <img  src={producto.imagen} alt="" />
          
        </div>
        
       
        <div className='flex flex-col border-2 text-center gap-5  w-full'>
          
          <h2 className='p-5 font-bold text-3xl'>{producto.nombre}</h2>
          <p className='text-2xl'>{producto.stock} unidades</p>
          <h4 className=' lg:text-3xl text-2xl  text-blue-400'>${producto.descuento > 0 ?  (producto.precio - (producto.descuento * producto.precio / 100)).toLocaleString('es-ES'): producto.precio.toLocaleString('es-ES')}</h4>
       
            <p className=' line-through text-gray-500'> {producto.descuento > 0 ? "$" + producto.precio.toLocaleString('es-ES') : ""}</p>
           <button onClick={handleAddProduct} className='px-5 py-5 border-2 cursor-pointer border-black rounded-2xl bg-gray-300 place-self-center'>Agregar al carrito</button>
        </div>
        
       </div>
    </main>
    <Footer></Footer>
    </>
  )
}

export default Singleproduct