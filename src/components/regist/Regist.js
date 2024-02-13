import React from 'react'
import { useLocation } from 'react-router-dom'
import "./Regist.css"
import a from "../../assets/hp-register--fitpro-solo3.png.large.2x.png"
function Regist() {
  const {pathname} = useLocation()
  if(pathname.includes("product")){
      return <></>
  }
  return (
    <div className='container regist'>
        <div className="reg__img">
            <img src={a} alt="" />
        </div>
        <div className="reg__title">
            <h1>
REGISTER YOUR BEATS</h1>
<button>Register Now</button>
        </div>
    </div>
  )
}

export default Regist