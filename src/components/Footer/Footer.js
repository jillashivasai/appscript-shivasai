import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGooglePay } from "react-icons/fa";
import { FaApplePay } from "react-icons/fa";
import { ImPaypal } from "react-icons/im";
import { FaAmazonPay } from "react-icons/fa";
import './Footer.css'

export default function Footer() {
  return (
    <div className='footer'>
    <div className='margin-right'>
    <p>BE THE FIRST TO KNOW</p>
    <p>Sign up for updates.</p>
    <input type='search'/> 
    <button className='subscribe'>SUBSCRIBE</button>
    </div>
    <div className='margin-right'>
        <p>CONTACT US</p>
        <p>+1234567890</p>
        <p>customer@gmail.com</p>
    </div>
    <div className='margin-right'>
        <h5>metta muse</h5>
        <p>About us</p>
        <p>Stories</p>
        <p>Artisians</p>
        <p>Boutiques</p>
        <p>Contact Us</p>
    </div>
    <div className='margin-right'>
        <h5>QUICK LINKS</h5>
        <p>Orders & Ahippings</p>
        <p>Join/Login as Seller</p>
        <p>Payment and Pricing</p>
        <p>Return & Refund</p>
        <p>FAQ's</p>
    </div>
    <div className='margin-right'>
        <h5>FOLLOW US</h5>
        <FaLinkedin className='color'/>
        <FaInstagram className='color'/>
        <div>
            <h5>metta muse ACCEPTS</h5>
            <FaGooglePay className='color'/>
            <FaApplePay className='color'/>
            <ImPaypal className='color'/>
            <FaAmazonPay className='color'/>
        </div>
    </div>
    </div>
  )
}
