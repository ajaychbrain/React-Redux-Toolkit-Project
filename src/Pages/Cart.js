import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../Redux/CartSlice';

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state)=>state.cart)
    const removeToCart = (id)=>{
        dispatch(remove(id))

    }
  return (
    <div className='cartWrapper'>
        <h3>Cart Page</h3>
        {
            cartItems.length>0?
            cartItems.map((item)=>(
                <div className='cartCard'>
                    <img src={item.image} alt='img' />
                    <h5>{item.title}</h5>
                    <h5>{item.price}</h5>
                    <button className='btn' onClick={()=>removeToCart(item.id)}>Remove Item</button>
                </div>
            )): <h3 style={{textAlign:'center', color:'red'}}>Your Cart is Empty!</h3>
            
        }
    </div>  
  )
}

export default Cart
