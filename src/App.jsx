import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/homePages/Nav'
import OfferBar from './Components/homePages/OfferBar'
import Hero from './Components/homePages/Hero'
import FeaturedCollection from './Components/homePages/FeaturedCollection'
import SaleCollection from './Components/homePages/SaleCollection'
import Footer from './Components/homePages/Footer'
import PageBuyCart from './Components/PagesReusable/PageBuyCart'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
    <Hero></Hero>
    <FeaturedCollection></FeaturedCollection>
    <SaleCollection></SaleCollection>
    </>
  )
}

export default App
