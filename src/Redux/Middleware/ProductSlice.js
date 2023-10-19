import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Applying Middleware 
export const getProducts = createAsyncThunk(
    "product/getProducts", async ()=> {
        return fetch("https://fakestoreapi.com/products").then((res)=>res.json());
    });




const productSlice = createSlice({
    name: 'product',
    initialState:{
        data:[],
        loading: false
    },
    // reducers:{
    //     setproducts(state,action)
    //     {
    //         state.data = action.payload;
    //     },
    //     setStatus(state,action)
    //     {
    //         state.status = action.payload;
    //     }
    // }
    extraReducers: {
        [getProducts.pending]: (state, action)=>{
            state.loading = true;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload
        },
        [getProducts.rejected]: (state, action) => {
            state.loading = false;
        },
    },



});

// export const {setproducts, setStatus} = productSlice.actions;
export default productSlice.reducer;


