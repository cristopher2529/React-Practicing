import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartIsVisivle : false,
    notification: null
}

const uiSlice = createSlice({
    name:'ui',
    initialState: initialState,
    reducers:{
        toggle(state){
            state.cartIsVisivle = !state.cartIsVisivle;
        },
        showNotification(state, action){
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
});

export const uiActions =  uiSlice.actions;

export default uiSlice;