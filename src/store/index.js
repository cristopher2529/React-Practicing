// import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';

import counterSlice from './counter-slice';
import authSlice from './auth-slice';;




// const store = createStore(counterSlice.reducer);
const store = configureStore({
    // reducer: counterSlice.reducer
    reducer:{
        counter:counterSlice,
        auth:authSlice
    }
});

export default store;

// const counterReducer= (state = initialState, action) => {

//     switch (action.type) {
//         case 'increment':
//             return {
//                 ...state,
//                 counter: state.counter + 1
//             }
//         case 'decrement':
//             return {
//                 ...state,
//                 counter: state.counter - 1
//             }
//         case 'increase':
//             return {
//                 ...state,
//                 counter: state.counter + action.amount
//             }
//         case 'toggleCounter':
//             return{
//                 ...state,
//                 showCounter: !state.showCounter
//             }
//         default:
//             break;
//     }

//     return state;
// }

// const store = createStore(counterReducer);

// export default store;