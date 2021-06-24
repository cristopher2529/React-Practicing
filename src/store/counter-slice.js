import {createSlice} from '@reduxjs/toolkit';

const initialCounterState = {
    counter : 0,
    showCounter: true
};
 
const counterSlice = createSlice({
    name:'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state,action){
            state.counter = state.counter + action.payload.amount;
        },
        toggleCounter(state){
            // console.log(state, state.showCounter , !state.showCounter);
            state.showCounter = !state.showCounter
        },
    }
});

//to export the dispatch actions
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;