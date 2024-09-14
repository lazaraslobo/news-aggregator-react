import { createAction } from '@reduxjs/toolkit';
import { LoginPayload, LogoutPayload, CreateNewAccountPayload } from './dataTypes';
import {SAGA_ACTION_TYPES, REDUCER_ACTION_TYPES} from "./actionTypes";

export const SAGA_ACTIONS = {
    authLogin: createAction<LoginPayload>(SAGA_ACTION_TYPES.AUTH_LOGIN),
    authLogout: createAction<LogoutPayload>(SAGA_ACTION_TYPES.AUTH_LOGOUT),
    createAccount: createAction<CreateNewAccountPayload>(SAGA_ACTION_TYPES.AUTH_CREATE_NEW_ACCOUNT),
}

export const REDUCER_ACTIONS = {
    setProcessing: createAction<{isProcessing: boolean}>(REDUCER_ACTION_TYPES.SET_PROCESSING),
    authLoginComplete: createAction<{isAuthenticated: boolean}>(REDUCER_ACTION_TYPES.AUTH_LOGIN_COMPLETED),
    authLogoutComplete: createAction<LogoutPayload>(REDUCER_ACTION_TYPES.AUTH_LOGOUT_COMPLETED),
    createAccountComplete: createAction<LogoutPayload>(REDUCER_ACTION_TYPES.AUTH_CREATE_NEW_ACCOUNT_COMPLETED),
}