import React, { Component } from 'react'
import '../../styles/SearchNavbar.css'
import logo from '../../assets/adidas-logo.jpg'
import axios from 'axios'

export default class SearchNavbar extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: null,
    };

}


async deletItem(){
  const response = await this.props.deleteCartItem()
 this.setState({data:response.data}) 
console.log(response);
}
async  getNoOfCartItems() {
  let response = await this.props.addToCart();
   this.setState({data:response.data})
 
}

  
 async openCart() {
    document.getElementById('lightBoxContainer').classList.remove('d-none');
    let response = await this.props.getCartDetails()
    this.setState({data:response.data}) 

  }
   closeSlide() {
    document.getElementById('lightBoxContainer').classList.add('d-none');
}
 
  
  render() {    
    

    return <>
    
        <nav className="search-navbar">
           <div className="search-navbar__search">
             <i class="fa-brands fa-searchengin"></i>
            <input type="text" placeholder="Search..." />
           </div>
           <div className='logo'>
             <img src={logo} alt="" />
           </div>
           <div className="search-navbar__links">
            <a href="#" className="search-navbar__link" onClick={()=>{this.openCart()}}>
           <i class="fa-solid fa-cart-arrow-down"><span className='count'>{this.state.data?.numOfCartItems?this.state.data?.numOfCartItems:0}</span></i> Cart</a>
           <a href="#" className="search-navbar__link"> <i class="fa-solid fa-heart"></i> Wishlist</a>
          <a href="#" className="search-navbar__link"><i class="fa-solid fa-user"></i> Login</a>
           </div>
    </nav>
    <div id="lightBoxContainer" className='d-none'>
        <div id="lightbox">
        <i id="closebtn" class="fa-solid fa-circle-xmark" onClick={this.closeSlide}></i>
            <h5 className='my-cart'>My Cart</h5>
            <h6>Cart Summary</h6>
            {this.state.data?.data?.products.length===0? <div className='no-items'>Your Have No Items Yet...</div>:''}
            {this.state.data?.data?.products.map((product)=> <div className="cart-item">
              <div className="item-img">
                <img src={product.product.imageCover} alt="" />
              </div>
              <div className="item-content">
                <p>{product.product.title}</p>
                <small>Quantity: {product.count}</small>
                <div className='p-r'>
                <h6>{product.price} LE</h6>
                <button onClick={()=>this.deletItem()}>Remove</button>
                </div>
                
              </div>
            </div>)}
            {this.state.data?.data?.products.length===0? '':<>
            <h4 className='total-price'>Total: {this.state.data?.data?.totalCartPrice} EGP</h4>
              <button className='rev-btn'>Review Cart</button>
              <button className='check-btn'>Complete Checkout</button>
            
            </>}

             
        </div>
    </div>
    </>
  }
}
