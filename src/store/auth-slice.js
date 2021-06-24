import {createSlice} from '@reduxjs/toolkit';

const initialAuthSate ={
    isAuthenticated: false
}

const authSlice = createSlice({
    name:'auth',
    initialState: initialAuthSate,
    reducers:{
        login(state){
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
});

//to export the dispatch actions
export const authActions = authSlice.actions;

export default authSlice.reducer;