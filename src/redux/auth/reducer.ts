import { createReducer } from '@reduxjs/toolkit';
import type { AuthState } from './dataTypes';
import { REDUCER_ACTIONS } from './actions';

const initialState: AuthState = {
    isAuthenticated: false,
    isFailed: false,
    isProcessing: false,
    isSuccess: false,
};

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(REDUCER_ACTIONS.setProcessing, (state, action) => {
            return {
                ...state,
                isProcessing: action.payload.isProcessing,
                isSuccess: false,
                isFailed: false,
            }
        })
        .addCase(REDUCER_ACTIONS.authLoginComplete, (state, action) => {
            const {isAuthenticated} = action.payload;

            return {
                ...state,
                isProcessing: false,
                isSuccess: isAuthenticated,
                isFailed: !isAuthenticated,
            }
        })
        .addCase(REDUCER_ACTIONS.authLogoutComplete, (state) => {
            state.isAuthenticated = false;
        });
});

export default authReducer;
