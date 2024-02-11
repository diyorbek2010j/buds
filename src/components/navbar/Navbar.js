import React from 'react'
import './Navbar.css'
import bud from "../../assets/bud.png"
import { IoMenu } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <div className=' container navbar'>
      <div>
      <img className='navbar__img' src={bud} alt="" />
      </div>
      <ul className="navbar__collection">
        <b className="navbar__item">Support</b>
        <b className="navbar__item">Shop</b>

      </ul>
      <div className="navbar__icon">
      <CiSearch />

      </div>
      <div className="menu">

      <IoMenu />
      </div>
    </div>
  )
}

export default Navbar