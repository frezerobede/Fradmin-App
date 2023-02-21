import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"product",
    initialState:{
        products:[],
        isFetching:false,
        error:false
    },
    reducers:
    {
    // GET PRODUCT
    
        getProductStart:(state)=>{
            state.isFetching=true;
            state.error=false;
        },
        getProductSuccess:(state,action)=>{
            state.products=action.payload;
            state.isFetching=false;
            state.error=false;
        }, getProductFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
         // DELETE PRODUCT
    
        deleteProductStart:(state)=>{
            state.isFetching=true;
            state.error=false;
        },
        deleteProductSuccess:(state,action)=>{
            state.products.splice(
                state.products.findIndex(item=>item._id===action.payload),1
            );
            state.isFetching=false;
            state.error=false;
        }, deleteProductFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
        // UPDATE PRODUCT
    
        updateProductStart:(state)=>{
            state.isFetching=true;
            state.error=false;
        },
        updateProductSuccess:(state,action)=>{
            state.products[state.products.findIndex(item=>item._id===action.payload.id)]=action.payload.product;
            state.isFetching=false;
            state.error=false;
        }, 
        updateProductFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
        // ADD PRODUCT
    
        addProductStart:(state)=>{
            state.isFetching=true;
            state.error=false;
        },
        addProductSuccess:(state,action)=>{
            state.products.push(action.payload);
            state.isFetching=false;
            state.error=false;
        }, 
        addProductFailure:(state)=>{
            state.isFetching=false;
            state.error=true;
        },
        
    },
     
});
export const {getProductStart,getProductSuccess,getProductFailure,deleteProductFailure,deleteProductSuccess,deleteProductStart,updateProductFailure,updateProductSuccess,updateProductStart,addProductStart,addProductSuccess,addProductFailure} = userSlice.actions;
export default userSlice.reducer;