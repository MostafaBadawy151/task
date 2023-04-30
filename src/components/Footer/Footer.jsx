import React, { Component } from 'react'
import '../../styles/Footer.css'
import insta from '../../assets/instagram@2x.png'
import facebook from '../../assets/facebook@2x.png'
import linkedin from '../../assets/linkedin@2x.png'
import mastercard from '../../assets/matercard.png'
import visa from '../../assets/visa.png'
import cash from '../../assets/cash.png'
import send from '../../assets/send.svg'
import logo from '../../assets/brand-logo-yellow.svg'
import nasnav from '../../assets/nas_nav.svg'

export default class Footer extends Component {
  render() {
    return <> 
    
    <footer>
      <div className="footer-section f-1">
        <img src={logo} alt="" className='logo-footer'/>
        <p>This is an exclusive online platform providing the consumer with a convenient way of shopping from stores while in the convenience of their home. Supporting the latest brands and products available in the stock real time.</p>
      </div>
      <div className="footer-section f-2">
        <h6>Subscribe to our newsletter</h6>
        <form>
          <input type="text" placeholder="Search" />
          <button type="submit">Subscribe <img src={send} alt="" /></button>
        </form>
        <div className="links">
        
        <ul>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Track Order</li>
          <li>Sell With Us</li>
          <li>Shipping and returns </li>
        </ul>
        <ul>
          <li><a href="#"><img src={facebook} alt="" /> Facebook</a></li>
          <li><a href="#"><img src={insta} alt="" /> Instagram</a></li>
          <li><a href="#"><img src={linkedin} alt="" /> LinkedIn</a></li>
          <li><a href="#"><i class="fa-brands fa-youtube"></i> Youtube</a></li>
        </ul>
        </div>

        
      </div>
    </footer>
    <div className='final-footer'>
      <p>@ 2021 yeshtery alrights reserved</p>
      <div className="cards">
        <img src={mastercard} alt="" />
        <img src={visa} alt="" />
        <img src={cash} alt="" />
      </div>
      <h6><span>Powerd By</span> <img src={nasnav} alt="" /></h6>
    </div>
    </>
  }
}
