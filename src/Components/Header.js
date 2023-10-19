import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const items = useSelector((state)=>state.cart)
    // console.log(items.length);
  return (
    <div style={{display:'flex', alignItems:'center',justifyContent:'space-around'}}>
        <span>Ecommerce App</span>
        <div>
           <Link to="/">Home</Link>
           <Link to="/cart" style={{marginLeft:'155px',fontWeight:'bolder'}}>Cart</Link>
            <span style={{fontWeight:'bolder',marginLeft:'7px'}}>Cart Items :{items.length}</span>
        </div>
       
    </div>
  )
}

export default Header
