import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";

import { CgProfile } from "react-icons/cg";
import './header.css'

export default function Header() {
  return (
    <div>
    <header className='header'>
    <img src='https://w7.pngwing.com/pngs/741/276/png-transparent-computer-icons-ventilation-symbol.png' alt='logo' className='logo'/>
    <h2>LOGO</h2>
    <div className='width'>
    <div>
        <CiSearch className='icons'/>
        <CiHeart className='icons'/>
        <FiShoppingCart className='icons'/>
        <CgProfile className='icons none' />
    </div>
    <select className='none'>
        <option>Eng</option>
        <option>Hin</option>
        <option>Tel</option>
    </select>
    </div>
    </header>
        <ul className='tabs'>
            <li className='tab-items'>SHOP</li>
            <li className='tab-items'>SKILLS</li>
            <li className='tab-items'>STORIES</li>
            <li className='tab-items'>ABOUT</li>
            <li className='tab-items'>CONTACT US</li>
        </ul>
        <h1 className='product-heading'>DISCOVER OUR PRODUCTS</h1>
      <p className='product-para'>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus seclerisque, Dolor integer seclerisque nibh amet mi ut elemetum dolor.</p>
    </div>
  )
}
