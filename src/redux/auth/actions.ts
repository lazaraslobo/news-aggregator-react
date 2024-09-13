import { createAction } from '@reduxjs/toolkit';
import { AUTH_LOGIN, AUTH_LOGOUT, LoginPayload, LogoutPayload } from './types';

// Action creators
export const authLogin = createAction<LoginPayload>(AUTH_LOGIN);
export const authLogout = createAction<LogoutPayload>(AUTH_LOGOUT);
