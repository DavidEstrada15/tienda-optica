import React from 'react'

function Calification() {
  return (
    <>
    <div className='p-10 place-self-center flex flex-col gap-5'>
<h2 className='text-3xl text-center'>Testimonios de Clientes</h2>
<p className='text-2xl'>Estas son las observaciones de nuestros clientes satisfechos</p>
    </div>
    <section className='grid grid-cols-1 lg:grid-cols-3 p-10 gap-5'>
<article className='flex flex-col border-2 rounded-3xl py-5 gap-10'>
  <div className='flex'>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="place-self-center ml-5 text-yellow-400" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> <h2>/4.9</h2>
  </div>
<h2 className='ml-5'>"Excelente lugar, buena atencion y orientacion, te dan la oportunidad de armar tus gafas a tu gusto, siempre dispuestos a colaborar en todo lo que necesites, lo recomiendo sobre todo los precios muy economicos y la calidad es excelente"</h2>
<hr />
<p className='ml-5'>Juan David Ramirez</p>
<p className='ml-5'>Paciente de 2025</p>
</article>
<article className='flex flex-col border-2 rounded-3xl py-5 gap-10'>
  <div className='flex'>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="place-self-center ml-5 text-yellow-400" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> <h2>/5</h2>
  </div>
<h2 className='ml-5'>"Excelente experiencia en esta optica, el servicio fue rapido, amable y profesional; los precios fueron muy competitivos y justos. Totalmente recomendable."</h2>
<hr />
<p className='ml-5'>Gleyder Hernandez</p>
<p className='ml-5'>Paciente de 2024</p>
</article>
<article className='flex flex-col border-2 rounded-3xl py-5 gap-10'>
  <div className='flex'>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="place-self-center ml-5 text-yellow-400" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg> <h2>/4.8</h2>
  </div>
<h2 className='ml-5'>"Excelente servicio, buena atencion"</h2>
<hr />
<p className='ml-5'>Jesus Altahona</p>
<p className='ml-5'>Paciente de 2025</p>
</article>
    </section>
    </>
  )
}

export default Calification