import React from 'react'
import './productcard.css'

const ProductCard=(props)=> {
    const {details}=props
    const{title,price,description,image,rating}=details
    const words = title.split(' ');
    const lastTwoWords = words.slice(-3).join(' ');

  return (
   <li>
    <div className='card'>
        <img src={image} alt='img' className='image'/>
        <h3>{lastTwoWords}</h3>
        <h4>{price} $</h4>
    </div>
   </li>
  )
}
export default ProductCard