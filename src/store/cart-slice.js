import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    items:[],
    totalQuantity: 0,
    totalAmount: 0,
    changed:false
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        replacerCart(state, action){
            state.items = action.payload.items;
            state.totalQuantity =  action.payload.totalQuantity;
            state.totalAmount = action.payload.totalAmount;
        },
        addIemToCart(state,action){
            state.changed = true;
            
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.itemId === newItem.id);
            if(!existingItem){
                state.items.push({
                    itemId: newItem.id,
                    price:newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name:newItem.title
                });
            }else{
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
            
            state.totalQuantity++;
            state.totalAmount += newItem.price;
            // console.log(state.items,state.totalAmount, state.totalQuantity);
        },
        removeItemFromCart(state, action){
            state.changed = true;
            const id = action.payload;
            const  existingItem = state.items.find(item => item.itemId ===id);
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.itemId!==id);
            }else{
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }

            state.totalQuantity--;
            state.totalAmount -= existingItem.price;
        }
    }
})


export const cartActions = cartSlice.actions;

export default cartSlice;