import React from 'react'
import lentes from "../assets/lentes.jpg"
import { Link } from 'react-router-dom'
function Herosection() {
  return (
    <>
    <section className='flex gap-5 flex-col lg:flex-row bg-blue-200 place-content-center text-center py-10'>
        <div className='flex flex-col gap-5'>
        <h3 className='text-3xl bg-blue-200  place-self-center lg:text-black text-white'>Ofertas calidad-precio</h3>
        <h2 className='text-5xl'>Tu correcta vision <br /> es nuestra mision</h2>
        <p>Examenes, lentes, monturas, lentes de contacto y todo lo que necesites para 
            tu vista.
        </p>
        <Link to={"/Appointment"}>
        <button className='bg-black flex cursor-pointer text-white place-self-center py-2 px-4 gap-5 rounded-2xl'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="place-self-center" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg>Agendar Examen Visual</button></Link></div>
        <img className='rounded-3xl w-[90vw] lg:w-[40vw] place-self-center'  src={lentes} alt="" />
    </section>
    </>
  )
}

export default Herosection