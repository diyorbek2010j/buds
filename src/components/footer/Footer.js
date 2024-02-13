import React from 'react'
import "./Footer.css"
import { MdOutlineEmail } from "react-icons/md";
import { useLocation } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className='footer container'>
      
        <div className="footer__top">
            <p>
footnote1 Works with compatible Beats headphones. Find My Beats requires an iPhone or iPod touch with iOS 14.5 or later, iPad with iPadOS 14.5 or later, or Mac with macOS Big Sur 11.3 or later. Customers must have an Apple ID and be signed into their iCloud account with Find My enabled.</p>
<br />
<p>2 New subscribers only. Offer available for a limited time to new subscribers who connect an eligible device to an Apple device running iOS 15 or iPadOS 15 or later. Offer good for 3 months after eligible device pairing. No audio product purchase necessary for current owners of eligible devices. Plan automatically renews at your region’s price per month until cancelled. Restrictions and other terms apply.</p>
        </div>
        <div className="footer__midle">
<div className="footer__icon">
<MdOutlineEmail />

</div>
<div className="footer__title">
    <h2>Join Our List</h2>
    <p>Don’t miss a beat. Stay up to date on the latest products, collabs and more.</p>
</div>
<div className="footer__input">
    <input type="text" placeholder='Email Address' />
</div>
        </div>
        <div className="footer__bottom">
          <div className="footer__card">
            <h3>Products</h3>
            <p>View All</p>
            <p>Special Offers</p>
            <p>Collaborations</p>
            <p>Beats Studio Pro</p>
            <p>Beats Studio Buds +</p>
            <p>Beats Fit Pro</p>
            <p>Beats Studio Buds</p>
            <p>Beats Flex</p>
            <p>Powerbeats Pro</p>
            <p>Beats Solo3 Wireless</p>
          </div>
          <div className="footer__card">
            <h3>Support</h3>
            <p>Downloads</p>
            <p>Product Help</p>
            <p>Service & Warranty</p>
            <p>Register Your Beats</p>
            <p>Update Your Beats</p>
            <p>Authorized Retailers</p>
            <p>Contact Support</p>
            <p>International Numbers</p>
           
          </div>
          <div className="footer__card">
            <h3>Company</h3>
            <p>About</p>
            <p>Press</p>
            <p>Beats Academy</p>
            <p>Careers</p>
            <p>Legal</p>
            <p>Terms of Use</p>
            <p>Privacy</p>
            <p>Trademark</p>
            <p>Promotion Terms</p>
          </div>
          <div className="footer__button">
            <h3>Location</h3>
            <button className='footer__btn'>United States | Change </button>
            <h3>Folow us</h3>
            <div className="footer__icons">
            <FaYoutube />
            <FaFacebookF />
            <FaInstagram />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Footer