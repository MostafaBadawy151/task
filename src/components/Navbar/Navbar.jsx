import React, { Component } from 'react'
import '../../styles/Navbar.css'
import logo from '../../assets/adidas-logo.jpg'
import navlogo from '../../assets/brand_logo_black (1).svg'

export default class Navbar extends Component {
  render() {
    return <>
        <nav className="navbar">
      <div className="navbar__logo">
        <i class="fa-solid fa-bars"></i> 
        <img src={navlogo} alt="" className='nav-logo'/>
      </div>
      <p className='vale'>&lt;  Valentine's Day offer Buy two get One free  &gt;</p>
      <div className="navbar__links">
        <a href="#" className="navbar__link"><i class="fa-solid fa-phone-volume"></i> Contact US</a>
        <a href="#" className="navbar__link"> <i class="fa-solid fa-cart-shopping"></i> Track Order</a>
        <a href="#" className="navbar__link"><i class="fa-solid fa-location-dot"></i> Find A Store</a>
      </div>
    </nav>
    </>
    
    
  }
}
