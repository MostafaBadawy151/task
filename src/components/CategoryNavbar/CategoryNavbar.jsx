import React, { Component } from 'react'
import '../../styles/CategoryNavbar.css'


export default class CategoryNavbar extends Component {
  render() {
    return <>
    
    <nav className="navbarc">
      <div className="navbar-links">
        <ul>
          <li><a href="#">Men </a></li>
          <li><a href="#">Women </a></li>
          <li><a href="#">Unisex </a></li>
          <li><a href="#">kids </a></li>
          <li><a href="#">Best Sellers </a></li>
          <li><a href="#">New Arrivals </a></li>
          <li><a href="#">Offers </a></li>
        </ul>
      </div>
    </nav>
    </>
  }
}
