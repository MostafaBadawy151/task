import React, { Component } from 'react'
import '../../styles/Product.css'
import Slider from 'react-slick';
import logo from '../../assets/adidas-logo.jpg'
import axios from 'axios';
import { toast } from 'react-hot-toast';
import prod1 from '../../assets/prdouct1.jpg'
import prod2 from '../../assets/product2.jpg'
import prod3 from '../../assets/product3.jpg'
import prod4 from '../../assets/product4.jpg'
import rotate from '../../assets/360.svg'


export default class Product extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: null,
      isLoading:true,
      error:null,
    };
}
 

  state={
     settings : {
      dots: false,
      infinite: true,
      speed: 500,
      autoplay:true,
      autoplaySpeed:1000,
      slidesToShow: 3,
      slidesToScroll: 3
    },
    userToken:localStorage.getItem('userToken')
  }
 
  async  addProductToCart() {
    // this.props.addToCart()
    let response = await this.props.addToCart();
     this.setState({data:response.data})       
    if(response.data.status == 'success'){
      toast.success(response.data.message, {duration:3000, className:'text-center border-success', position:'bottom-left'})
    }
    else{
      toast.error('Error')

    }
  }
 
  
  render() {
    console.log(this.state.data);
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      arrows:true,
      autoplay:true,
      autoplaySpeed:2000,
    };

    let {imageCover, title, description,price, ratingsAverage, images} = this.props.data.data
    return <>
        {/* <div className="count2">0</div> */}
    <div className="product">
      <div className="product-images">
        <div className="main-img">
          <img src={rotate} alt="" className='rotate' />
        <img src={imageCover} alt="" className='main'/>
        </div>
       <div className="more-images">
       <Slider {...settings} className={'cursor-pointer'}>
          {images.map((photo)=><div> <img src={photo} className={'w-100'}></img></div>)}
        </Slider>
       </div>
      </div>

      <div className="product-content">
        <img src={logo} alt="" className='logo'/>
        <p>{description}</p>
        <i class="fa-solid fa-star "></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star fa-white"></i>
        <i class="fa-solid fa-star fa-white"></i>
        <span>{ratingsAverage} of 5</span>
        <h5 className='price'>{price} EGP</h5>
        <hr />
        <h5 className='sizes'>Sizes</h5>
        <div className="sizes">
          <div className="size">
            <small>S</small>
          </div>
          <div className="size">
          <small>M</small>
          </div>
          <div className="size">
          <small>L</small>
          </div>
          <div className="size">
          <small>xL</small>
          </div> 
        </div>
        <hr />
        <h6>Color</h6>
        <div className="product-colors">
          <div className="pro-color">
            <img src={images[0]} alt="" />
          </div>
          <div className="pro-color">
            <img src={images[1]} alt="" />
          </div>
        </div>
        <hr />
        <h6>Quantity</h6>
        <div className='quantity'>
        <button className="number">-</button>
        <span>1</span>
        <button className="number">+</button>

        </div>
        <button className='add-btn' onClick={()=>this.addProductToCart()}>Add to cart</button>
        <button className='pick-btn'>Pick Up From Store</button>


      </div>
    </div>
    <div className="semilar-products">
      <div className='semi'>
      <h3>Similar Products</h3>
      <p>You may like these products also</p>
      </div>
      
      <div className="semi-products">
        <div className="semi-product">
        <img src={rotate} alt="" className='rotate' />
          <img src={prod1} alt="" className=''/>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className='semi-2'>
          <h6 className='semi-price'>9.999 LE</h6>
          <div  className='logo-pro'>
            <img src={logo} alt=""/>
          </div>
          </div>
          
          <div className='semi-1'>
            <div className="stars">
            <i class="fa-solid fa-star "></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
            </div>
            <h6>4.5 of 5</h6>
          </div>
          <h6>Lorem ipsum dolor sit amet.</h6>
        </div>
        <div className="semi-product">
        <img src={rotate} alt="" className='rotate' />
          <img src={prod2} alt="" className=''/>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className='semi-2'>
          <h6 className='semi-price'>9.999 LE</h6>
          <div  className='logo-pro'>
            <img src={logo} alt=""/>
          </div>
          </div>
          
          <div className='semi-1'>
            <div className="stars">
            <i class="fa-solid fa-star "></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
            </div>
            <h6>4.5 of 5</h6>
          </div>
          <h6>Lorem ipsum dolor sit amet.</h6>
        </div>
        <div className="semi-product">
        <img src={rotate} alt="" className='rotate' />
          <img src={prod3} alt="" className=''/>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className='semi-2'>
          <h6 className='semi-price'>9.999 LE</h6>
          <div  className='logo-pro'>
            <img src={logo} alt=""/>
          </div>
          </div>
          
          <div className='semi-1'>
            <div className="stars">
            <i class="fa-solid fa-star "></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
            </div>
            <h6>4.5 of 5</h6>
          </div>
          <h6>Lorem ipsum dolor sit amet.</h6>
        </div>
        <div className="semi-product">
        <img src={rotate} alt="" className='rotate' />
          <img src={prod4} alt="" className=''/>
          <p>Lorem ipsum dolor sit amet.</p>
          <div className='semi-2'>
          <h6 className='semi-price'>9.999 LE</h6>
          <div  className='logo-pro'>
            <img src={logo} alt=""/>
          </div>
          </div>
          
          <div className='semi-1'>
            <div className="stars">
            <i class="fa-solid fa-star "></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
            </div>
            <h6>4.5 of 5</h6>
          </div>
          <h6>Lorem ipsum dolor sit amet.</h6>
        </div>
      </div>
    </div>


    </>
   
  }
}
