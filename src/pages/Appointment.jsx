import React from 'react'
import Header from '../components/Header'
import { useState } from 'react'
function Appointment() {
  let today= new Date()
  let day= today.getDate()
  let month= today.getMonth() + 1
  let year= today.getFullYear()

  let [date, setDate]= useState('')
  if (day < 10) {
    day = '0' + day
  }

  if (month < 10){
    month= '0' + month
  }

  let fechaactual= year + '-' + month + '-' + day
  const handleSubmit= (e) =>{
e.preventDefault()
alert(`Cita agendada el ${date}`)
  }

  const handleDate =  (e) =>{
    setDate(e.target.value)
  }
  return (
    <>
    <Header></Header>
    <form onSubmit={(e) => handleSubmit(e)} className='flex flex-col gap-20'>
      <h2 className='p-10 text-3xl text-center'>Agenda una cita para tu examen</h2>
      <input onChange={(e) => handleDate(e)} required min={fechaactual} type="date" className='border-2 p-5 place-self-center' />
      <button className='bg-blue-500 place-self-center py-5 px-10 text-white'>Crear cita</button>
    </form>
    </>
  )
}

export default Appointment