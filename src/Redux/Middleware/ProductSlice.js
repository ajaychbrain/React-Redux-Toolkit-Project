import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";


export const stauses = Object.freeze(
    {
        success: 'success',
        error : 'error',
        loading : 'loading'
    }
)
const productSlice = createSlice({
    name: 'product',
    initialState:{
        data:[],
        status: stauses.success,
    },
    reducers:{
        setproducts(state,action)
        {
            state.data = action.payload;
        },
        setStatus(state,action)
        {
            state.status = action.payload;
        }
    }
})

export const {setproducts, setStatus} = productSlice.actions;
export default productSlice.reducer;


// Applying Middleware 
export function getProducts(){
    return async function fetchproductThunk(dispatch){
        dispatch(setStatus(stauses.loading));
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            dispatch(setproducts(data));
            dispatch(setStatus(stauses.success));

        }catch(error)
        {
            console.log(error)
            dispatch(setStatus(stauses.error))
        }
    }
}