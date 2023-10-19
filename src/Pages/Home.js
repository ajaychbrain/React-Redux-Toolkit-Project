import React, {useState, useEffect} from 'react'
import { add } from '../Redux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../Redux/Middleware/ProductSlice';

const Home = () => {
  const {data, loading} = useSelector((state)=>state.product)
    const dispatch = useDispatch();
 
    useEffect(()=>{
        dispatch(getProducts())
    },[])

    if(loading){
      return <h3>Loading Data!</h3>
    }


    // console.log(products)


    const addToCart = (product)=>{
        dispatch(add(product));
    }


  return (
    <div style={{marginTop:'43px'}}>
    <div className='productsWrapper'>
     
      {console.log(data.length)}
     {
      data.length>0 ?
      
        data.map((product)=>(
            <div className='card' key={product.id}>
                <img src={product.image} alt='img'/>
                <h4>{product.title}</h4>
                <h5>{product.price}</h5>
                <button className='btn' onClick={()=>addToCart(product)}>Add to Cart</button>
            </div>
        )):<h3>No Product Available</h3>
      

     }
     
      
      
    </div>
    </div>
  )
}

export default Home
