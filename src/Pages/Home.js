import React, {useState, useEffect} from 'react'
import { add } from '../Redux/CartSlice';
import { useDispatch } from 'react-redux';

const Home = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    useEffect(()=>{
        const fetchProduct = async()=>{
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data);
        }
        fetchProduct();
    },[])

    const addToCart = (product)=>{
        dispatch(add(product));
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
