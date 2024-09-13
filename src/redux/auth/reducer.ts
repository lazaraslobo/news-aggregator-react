import { createReducer } from '@reduxjs/toolkit';
import { AuthState } from './types';
import { authLogin, authLogout } from './actions';

const initialState: AuthState = {
    isAuthenticated: false,
};

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(authLogin, (state, action) => {
            state.isAuthenticated = true;
        })
        .addCase(authLogout, (state) => {
            state.isAuthenticated = false;
        });
});

export default authReducer;
