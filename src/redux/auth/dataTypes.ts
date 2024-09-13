import {SAGA_ACTION_TYPES} from "./actionTypes";

// Define state type
export type AuthState = {
    isAuthenticated: boolean;
}

// Define action payloads
export type LoginPayload = {
    userEmail: string;
    userPassword: string;
}

export type LogoutPayload  = {}

// Define action type= s
type AuthLoginAction = {
    type: typeof SAGA_ACTION_TYPES.AUTH_LOGIN;
    payload: LoginPayload;
}

type AuthLogoutAction = {
    type: typeof SAGA_ACTION_TYPES.AUTH_LOGOUT;
    payload: LogoutPayload;
}

export type AuthActionTypes = AuthLoginAction | AuthLogoutAction;
