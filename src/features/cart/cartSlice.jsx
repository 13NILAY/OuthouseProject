import { createSlice } from '@reduxjs/toolkit'
import axios from '../../api/axios';
const initialState={
    cart:[],
}
export const cartSlice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const newProduct={
                id:action.payload.product._id,
                product:action.payload.product,
                quantity:action.payload.quantity,
                selectedSize:action.payload.selectedSize
            };
             state.cart.push(newProduct);//direct mutation 
        },
        // updateQuantity:(state,action)=>{
        //   const index =state.cart.findIndex((item) => item.id === action.payload._id);
        //   if(index !== -1){
        //     state.cart[index].quantity=action.payload.quantity;
        //   }
        // },
        deleteFromCart:(state,action)=>{
            state.cart=state.cart.filter((products)=>products._id !=action.payload);
        },
        fetchCart: (state, action) => {
          state.cart = action.payload;
        }
    }
})

export const {addToCart,deleteFromCart,updateQuantity,fetchCart}=cartSlice.actions;

export const addProductToCart = ({product, quantity,selectedSize}) => async (dispatch) => {
  
    try {
      const newProduct = {
        id: product._id,
        product,
        quantity,
        selectedSize
      };
      const response=await axios.post(
        `/users/addCart/${product._id}`,
        JSON.stringify({ 
            email:"nilay1030@gmail.com", product: newProduct.product,selectedSize,quantity }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      if(response.status==200){
        dispatch(addToCart(newProduct));
        // navigate('/shop');
      }
      // Dispatch the action with the new product details
      
    } catch (error) {
      console.error('Error adding product to cart:', error);
    }
  };

  export const deleteProductFromCart =({_id,size}) => async (dispatch) =>{
    try{
      console.log(_id);
      console.log(size);
      const response =await fetch('https://outhouseproject.onrender.com/users/removeCart',{
        method:'DELETE',
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
        body:JSON.stringify({productId:_id, size:size ,userId:'669a5e947e33bff5c9ea4ee7'}),
        
    });
      console.log(response);
      if(response.status==200){
        dispatch(deleteFromCart(_id));
        // navigate('/shop');
      }
    }catch (error) {
      console.error('Error adding product to cart:', error);
    }
  }
  export default cartSlice.reducer