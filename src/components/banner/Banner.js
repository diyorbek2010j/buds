import React from 'react'
import "./Banner.css"
import { useLocation } from 'react-router-dom'
import b from "../../assets/studiobudsplus-hero.jpg.large.2x.jpg"
function Banner() {
  const {pathname} = useLocation()
  if(pathname.includes("product")){
      return <></>
  }
  return (
    <div className='container banner'>
       <h1>Beast Studio <br /> Pro</h1>
       <button>Shop</button>
    </div>
  )
}

export default Banner