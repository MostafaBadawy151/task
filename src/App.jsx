import React, { Component } from 'react'
import Navbar from './components/Navbar/Navbar'
import SearchNavbar from './components/SearchNavbar/SearchNavbar'
import CategoryNavbar from './components/CategoryNavbar/CategoryNavbar'
import Footer from './components/Footer/Footer'
import Parent from './Services/Parent'
import  { Toaster } from 'react-hot-toast';
export default class App extends Component {
 
  render() {
    return <>
    <Navbar/>
    <Toaster/>
    <Parent/>
    </>
  }
}

