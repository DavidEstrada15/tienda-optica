import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Header() {
  let [open, setOpen] = useState(false)
  let [searchvalue, setSearchvalue] = useState('')
  let [input, setInput] = useState(true)

  const handleOpen = () =>{
    open == true ? setOpen(false) : setOpen(true)
  }

  const handleInput = () =>{
    input == false ? setInput(true) : setInput(false)
  }

  const handleSearch = (e) =>{
    e.preventDefault()

      redireccion()
  }
  useEffect(() =>{
    handleCheckwindows()
  })

  const handleCheckwindows= () =>{
    if (window.innerWidth  > 767) {
    setInput(false)
    console.log("Hola")
  }
  }
  

  const handleChangesearch= (e) =>{
    setSearchvalue(e.target.value)
  }
const navigate= useNavigate()
    const redireccion= () => {
      
      navigate('/Searchpage', {state: searchvalue.toLowerCase()})
     }
  return (
    <><header className='w-full flex flex-col bg-blue-400'>
        <div className='flex lg:hidden  place-items-center py-10 place-content-between text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" onClick={handleOpen} className='place-self-center scale-200 ml-2' width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
        <Link to={"/"}><h1 className='text-3xl text-center'>OPTICA CARMEN</h1></Link><div className='flex place-items-center gap-5 sm:mr-5'>
            <div className='place-content-center'>
           <button onClick={handleInput} className='text-white place-self-center'><svg xmlns="http://www.w3.org/2000/svg"  style={input || window.innerWidth < 768 == true ? {display: "flex"} : {display: "none"}}  width="16" height="16" fill="currentColor" className="scale-150" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></button> <form style={input == false ? {display: "flex"} : {display: "none"}} onSubmit={handleSearch} className='place-content-center sm:static absolute top-25 left-10'><input required onChange={(e) => handleChangesearch(e)} className='px-10 py-3 rounded-2xl bg-white text-start text-black' type="text" />
           <button  className='text-black relative bottom-0 right-10'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="scale-200" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></button> </form></div><Link to={"/Cartshopping"}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="scale-150" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg></Link></div><div className='sm:hidden'></div>

</div><div style={open == true ? {display: "flex"} : {display: "none"}} className='absolute flex-col w-full gap-5 py-5 top-29 bg-white'>
   <Link to={"/Filterbycategorie"} state={"Lentes De Contacto"}><h2>Lentes de contacto</h2></Link>
   <Link to={"/Filterbycategorie"} state={"Gafas"}><h2>Gafas</h2></Link>
   <Link to={"/Filterbycategorie"} state={"Monturas"}><h2>Monturas</h2></Link>
  <Link to={"/Appointment"}><h2>Agendar Cita</h2></Link>
</div>
<div className='hidden lg:flex bg-blue-400 py-4 justify-between w-full text-white'>
            
        <Link to={"/"}><h1 className='text-5xl ml-20 text-center place-self-center'>OPTICA CARMEN</h1></Link><div className='flex place-items-center place-content-center gap-5 lg:mr-20 sm:mr-5'>
          <form onSubmit={handleSearch} className='place-content-center'><input required onChange={(e) => handleChangesearch(e)} className='px-20 py-3 rounded-2xl bg-white text-start text-black' type="text" />
           <button className='text-black relative bottom-0 right-10'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="scale-200" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></button> </form><Link to="/Cartshopping"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="scale-200" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
</svg></Link></div>

</div>
<div className='hidden lg:flex text-2xl text-center py-5 text-white place-content-center gap-5'>
   <Link to={"/Filterbycategorie"} state={"Lentes De Contacto"}><h2>Lentes de contacto</h2></Link>
   <Link to={"/Filterbycategorie"} state={"Gafas"}><h2>Gafas</h2></Link>
   <Link to={"/Filterbycategorie"} state={"Monturas"}><h2>Monturas</h2></Link>
  <Link to={"/Appointment"}><h2>Agendar Cita</h2></Link>
</div>
        </header></>
  )
}

export default Header