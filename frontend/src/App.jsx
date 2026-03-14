import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './components/Navbar/Navbar'
import Slider from './pages/Slider/Slider'
import Footer from './components/Footer/Footer'
import Shop from './components/Footer/Shop/Shop'
import ProductDeatils from './pages/ProductDeatils/ProductDeatils'

function App() {
 

  return (
    <>
   <Navbar/>
  
   <ProductDeatils/>
   <Footer/>
    </>
  )
}

export default App
