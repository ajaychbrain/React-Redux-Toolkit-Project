import React, {useState, useEffect} from 'react'
import { add } from '../Redux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, stauses } from '../Redux/Middleware/ProductSlice';

const Home = () => {
 
    const dispatch = useDispatch();
    const {data:products, status} = useSelector((state)=>state.product)
    useEffect(()=>{
        dispatch(getProducts())
    },[])

    const addToCart = (product)=>{
        dispatch(add(product));
    }

    if(status === stauses.loading){
        return <h2 style={{fontWeight: 'bolder'}}>Loading....</h2>
    }

  return (
    <div style={{marginTop:'43px'}}>
    <div className='productsWrapper'>
      {
        products.map((product)=>(
            <div className='card' key={product.id}>
                <img src={product.image} alt='img'/>
                <h4>{product.title}</h4>
                <h5>{product.price}</h5>
                <button className='btn' onClick={()=>addToCart(product)}>Add to Cart</button>
            </div>
        ))  
      }
    </div>
    </div>
  )
}

export default Home
