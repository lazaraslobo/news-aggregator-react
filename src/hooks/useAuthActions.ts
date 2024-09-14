import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { SAGA_ACTIONS } from '../redux/auth/actions';
import {CreateNewAccountPayload} from "../redux/auth/dataTypes";

const useAuthActions = () => {
    const dispatch = useDispatch<AppDispatch>();

    const login = (userEmail: string, userPassword: string) => dispatch(SAGA_ACTIONS.authLogin({ userEmail, userPassword }));
    const logout = () => dispatch(SAGA_ACTIONS.authLogout({}));

    const createAccount = (payload: CreateNewAccountPayload) =>
        dispatch(SAGA_ACTIONS.createAccount(payload));

    return { login, logout, createAccount };
};

export default useAuthActions;
