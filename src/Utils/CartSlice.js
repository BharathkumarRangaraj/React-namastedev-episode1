import { createSlice } from "@reduxjs/toolkit";
import store from "./Store";

const CartSlice=createSlice({
    name:'cart',
    initialState:{
        items:['apple','orange']
    },

    reducers:{

        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearItem:(state,action)=>{
            state.items=[];
        }
    }

})
    
    

export const{addItem,removeItem,clearItem} =CartSlice.actions;
export default CartSlice.reducer;
