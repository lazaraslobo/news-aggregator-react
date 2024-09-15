import {SAGA_ACTION_TYPES} from "./actionTypes";
import {UserResponseInnerType} from "../../interfaces-types/UserAuthTypes";

// Define state type
export type AuthState = {
    user ?: UserResponseInnerType;
    isAuthenticated: boolean;
    isProcessing: boolean;
    isFailed: boolean;
    isSuccess: boolean;
}

// Define action payloads
export type LoginPayload = {
    userEmail: string;
    userPassword: string;
}

export type LogoutPayload  = {}

export type CreateNewAccountPayload  = {
    name: string;
    email: string;
    password: string;
    onSuccessCallback?: () => void;
    onErrorCallback?: (message: string) => void;
}


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
