import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: [],
    reducers:{
        addToCart:(state, action)=>{
            const findProduct = state.find((item)=> item.id === action.payload.id)
            if(findProduct){
                findProduct.quantity += 1
            }else{
                const productClone = {...action.payload, quantity:1}
                state.push(productClone)
            }
        },
        deleteFromCart: (state, action)=>{
            return state.filter((item)=> item.id !== action.payload.id)
        },
        clearFromCart:(state, action)=>{
            return []
        },
        incrementQuantity: (state, action)=>{
            const findProduct = state.find((item)=> item.id === action.payload.id)
            state = findProduct.quantity++
        },
        decrementQuantity: (state, action)=>{
            const findProduct = state.find((item)=> item.id === action.payload.id)
            if(findProduct.quantity == 1){
                return state.filter((item)=> item.id !== action.payload.id)
            }else{
                findProduct.quantity--
            }
            // state = findProduct.quantity--
        }
    },
})

export const {addToCart, deleteFromCart, clearFromCart, incrementQuantity , decrementQuantity} = cartSlice.actions
export default cartSlice.reducer