import './index.css'

import Hero from "./hero.js"
import Arrivals from "./arrivals.js"
import Fall from './fall.js'
import Popular from './popular.js'
import Categories from './categories.js'
import Discount from './discount.js'
import Subscription from './subscription.js'


function Home(){ 
  if(!localStorage.getItem('isLoggedIn')){
    localStorage.setItem('isLoggedIn', 'false')
  }   
  return (
    <div className="">
      <Hero/>  
      <Arrivals/> 
      <Fall/>
      <Categories/>  
      <Popular/> 
      <Discount/>
      <Subscription />   
    </div>
  )
}

export default Home;