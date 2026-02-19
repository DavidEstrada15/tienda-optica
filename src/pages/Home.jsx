import React from 'react'
import Header from '../components/Header'
import Herosection from '../components/Herosection'
import Ourservices from '../components/Ourservices'
import Ourproducts from '../components/Ourproducts'
import Footer from '../components/Footer'
import Offerts from '../components/Offerts'
import Calification from '../components/Calification'
function Home() {
  return (
    <>
    <Header></Header>
    <Herosection></Herosection>
    <Ourservices></Ourservices>
    <Calification></Calification>
    <Ourproducts></Ourproducts>
    <Offerts></Offerts>
    <Footer></Footer>
    </>
  )
}

export default Home