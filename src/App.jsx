import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Singleproduct from './pages/Singleproduct.jsx'
import Cartshopping from './pages/Cartshopping.jsx'
import Filterbycategorie from './pages/Filterbycategorie.jsx'
import Searchpage from './pages/Searchpage.jsx'
import Appointment from "./pages/Appointment.jsx"
function App() {

  return (
    <>
<Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Singleproduct' element={<Singleproduct/>}></Route>
        <Route path='/Cartshopping' element={<Cartshopping/>}></Route>
        <Route path='/Filterbycategorie' element={<Filterbycategorie/>}></Route>
        <Route path='/Searchpage' element={<Searchpage/>}></Route>
        <Route path='/Appointment' element={<Appointment/>}></Route>
    </Routes>
    </>
  )
}

export default App
