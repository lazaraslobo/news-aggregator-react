import { createReducer } from '@reduxjs/toolkit';
import type { AuthState } from './dataTypes';
import { REDUCER_ACTIONS } from './actions';

const initialState: AuthState = {
    isAuthenticated: false,
};

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(REDUCER_ACTIONS.authLoginComplete, (state, action) => {
            console.log("in reducer");
            state.isAuthenticated = true;
        })
        .addCase(REDUCER_ACTIONS.authLogoutComplete, (state) => {
            state.isAuthenticated = false;
        });
});

export default authReducer;
