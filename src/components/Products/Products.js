import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import Sidebar from '../Sidebar/Sidebar'
import './products.css'

export default function Products() {
  const[products,setProducts]=useState([])
  const fetchData=async ()=>{
    const url="https://fakestoreapi.com/products"
    const response=await fetch(url)
    const data=await response.json()
    setProducts(data)
  }
useEffect(()=>{
  fetchData()
},[])

  return (
    <div className='product-container'>
    <div className='discover-width'>
    </div>
    <ul className='items-section'>
      {products.map((eachItem)=>(
        <ProductCard key={eachItem.id} details={eachItem}/>
      ))}
    </ul>
    </div>
  )
}
