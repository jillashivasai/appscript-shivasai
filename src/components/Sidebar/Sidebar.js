import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';
import { FaAngleLeft } from "react-icons/fa6";
import './sidebar.css';
import Accordion from '../Accordoin/Accordion';
import ProductCard from '../ProductCard/ProductCard';
import Products from '../Products/Products';

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };
  const onClickLeft=()=>{
    setExpanded(false)
  }

  return (
    <div className='d-flex'>
    <div className={expanded ? 'expanded' : 'sidebar'}>
      <RxHamburgerMenu className={expanded ?"hamburger-expanded":"hamburger"} onClick={toggleSidebar} />
      {expanded ? (
        <>
        <div className='margin left-icon'>
            <FaAngleLeft onClick={onClickLeft} />
        </div>
          {/* <div className='margin-2'>
          <select>
            <option>All</option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>
          </div>
          <div className='margin-2'>
            <FaUser className="iconz" />
            <span>Profile</span>
          </div>
          <div className='margin-2'>
            <FaCog className="iconz"/>
            <span>Settings</span>
          </div> */}
          <Accordion/>
        </>
      ) : (
        <div className="iconss">
          <FaHome className='margin' />
          <FaUser className='margin' />
          <FaCog  className='margin'/>
        </div>
      )}

    </div>
    <Products/>
    </div>
  );
}
