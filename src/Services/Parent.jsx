import React, { Component } from 'react'
import Product from '../components/Product/Product'
import axios from 'axios';
import SearchNavbar from '../components/SearchNavbar/SearchNavbar';
import CategoryNavbar from '../components/CategoryNavbar/CategoryNavbar';
import Footer from '../components/Footer/Footer';
import './Parent.css'

const LazyLoadedComponent = React.lazy(() => import('../components/Footer/Footer'));


export default class Parent extends Component {
    constructor(props){
        super(props)
        this.state = {
          data: null,
          isLoading:true,
          error:null,
        };
    }

    componentDidMount() {
      fetch('https://route-ecommerce.onrender.com/api/v1/products/6428ce55dc1175abc65ca043')
        .then(response => response.json())
        .then(data => {
          this.setState({
            data: data,
            isLoading: false,
          });
        })
        .catch(error => {
          this.setState({
            error: error,
            loading: false,
          });
        });
    }
    async addToCart() {
      
      return axios.post('https://route-ecommerce.onrender.com/api/v1/cart',
      { productId:'6428ce55dc1175abc65ca043'},
      {headers:{
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjczZDVjZmM1NTUzYzMzNzdiNDllMSIsIm5hbWUiOiJtYWkiLCJyb2xlIjoidXNlciIsImlhdCI6MTY4MTkzMzM5OCwiZXhwIjoxNjg5NzA5Mzk4fQ.QOsW_zWkbty6PtG6apCo5-4CIB9zvm_ryK7bpkxkJMg'
      }})
      .then((response)=>response)
      .catch((err)=>err)
      
  }
  getLoggedUserCart() {
    return axios.get('https://route-ecommerce.onrender.com/api/v1/cart',{headers:{
      token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjczZDVjZmM1NTUzYzMzNzdiNDllMSIsIm5hbWUiOiJtYWkiLCJyb2xlIjoidXNlciIsImlhdCI6MTY4MTkzMzM5OCwiZXhwIjoxNjg5NzA5Mzk4fQ.QOsW_zWkbty6PtG6apCo5-4CIB9zvm_ryK7bpkxkJMg'
    }})
    .then((response)=> response)
    .catch((err)=>err)
  }
  deleteCartItem() {
    return axios.delete('https://route-ecommerce.onrender.com/api/v1/cart/6428ce55dc1175abc65ca043',{headers:{
      token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MjczZDVjZmM1NTUzYzMzNzdiNDllMSIsIm5hbWUiOiJtYWkiLCJyb2xlIjoidXNlciIsImlhdCI6MTY4MTkzMzM5OCwiZXhwIjoxNjg5NzA5Mzk4fQ.QOsW_zWkbty6PtG6apCo5-4CIB9zvm_ryK7bpkxkJMg'
    }})
    .then((response)=> response)
    .catch((err)=>err)
  }
  
  render() {
    const { data, isLoading, error } = this.state;


    if (isLoading) {
      return <div className='spin-Cover'><i class="fa-solid fa-spinner fa-spin "></i></div>;
    }

    if (error) {
      return <div>Error: {error.message}</div>;
    }

    return (
      
      <div>
        <SearchNavbar getCartDetails={this.getLoggedUserCart} deleteCartItem={this.deleteCartItem}  />
        <CategoryNavbar/>
        <Product data={data} addToCart={this.addToCart}  />
        <React.Suspense fallback='Loading...'>
        <LazyLoadedComponent/>
        </React.Suspense>
      
      </div>
      
    );
  }
  
}
