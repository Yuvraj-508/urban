import React from 'react'
import Navbar from '../components/Navbar'
import MainBanner from '../components/Hero'
import NewArrival from '../components/NewArrival'
import Categories from '../components/Categories'
import Faq from '../components/Faq'
import Reviews from '../components/Reviews'
import Newsletter from '../components/Newsletter'
import Fotter from '../components/Fotter'
import Hero from '../components/Hero'

function Home() {
  return (
    <div>
        {/* <Navbar/> */}
        <Hero/>
        <Categories/>
        <NewArrival/>
       <Reviews/>
              <Faq/>
        <Newsletter/>
        {/* <Fotter/> */}
  
    

    </div>
  )
}

export default Home