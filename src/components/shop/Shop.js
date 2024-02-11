import React from 'react'
import "./Shop.css"
import r from "../../assets/rubik.png"
import f from "../../assets/ret.png"
import a from "../../assets/ap.png"
function Shop() {
  return (
    <div className='container shop'>
        <h1>Seamless Shopping Through Apple</h1>
        <div className="shop__wrapper">
            <div className="shop__card">
                <img src={r} alt="" />
                <h3>Fast and Free Delivery</h3>
                <p>Enjoy free two-day delivery on most <br /> in-stock items.</p>
                <br />

                <a href="">Loren More</a>
            </div>
            <div className="shop__card">
                <img src={a} alt="" />
                <h3>Easy Returns</h3>
                <p>Return eligible items to Apple within <br />14 days of receipt.</p>
                <br />
                    
                <a href="">Loren More</a>
            </div>
            <div className="shop__card">
                <img src={f} alt="" />
                <h3>In-Store Pickup</h3>
                <p>Pick up your online order at an Apple <br /> Store near you.</p>
                <br />
                    
                <a href="">Loren More</a>
            </div>
        </div>
    </div>
  )
}

export default Shop