import { createReducer } from '@reduxjs/toolkit';
import { AuthState } from './types';
import { authLogin, authLogout } from './actions';

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
};

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(authLogin, (state, action) => {
            state.isAuthenticated = true;
            console.log("LOGGED IN ", state.isAuthenticated)
            state.user = action.payload.user;
        })
        .addCase(authLogout, (state) => {
            state.isAuthenticated = false;
            state.user = null;
        });
});

export default authReducer;
