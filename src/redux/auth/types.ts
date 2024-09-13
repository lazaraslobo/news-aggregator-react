// Define action types
export const AUTH_LOGIN = 'AUTH_LOGIN';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

// Define state type
export interface AuthState {
    isAuthenticated: boolean;
    user: string | null;
}

// Define action payloads
export interface LoginPayload {
    user: string;
}

export interface LogoutPayload {}

// Define action interfaces
interface AuthLoginAction {
    type: typeof AUTH_LOGIN;
    payload: LoginPayload;
}

interface AuthLogoutAction {
    type: typeof AUTH_LOGOUT;
    payload: LogoutPayload;
}

export type AuthActionTypes = AuthLoginAction | AuthLogoutAction;
