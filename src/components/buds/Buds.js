import React from 'react'
import { useLocation } from 'react-router-dom'
import "./Buds.css"
function Buds() {
  const {pathname} = useLocation()
  if(pathname.includes("product")){
      return <></>
  }
  return (
    <div className='container banner'>
    <h1>Beast <br /> Studio  Buds+</h1>
    <button>Shop</button>
 </div>
  )
}

export default Buds