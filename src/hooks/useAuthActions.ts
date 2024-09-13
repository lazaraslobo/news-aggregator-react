import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { SAGA_ACTIONS } from '../redux/auth/actions';

const useAuthActions = () => {
    const dispatch = useDispatch<AppDispatch>();

    const login = (userEmail: string, userPassword: string) => dispatch(SAGA_ACTIONS.authLogin({ userEmail, userPassword }));
    const logout = () => dispatch(SAGA_ACTIONS.authLogout({}));

    return { login, logout };
};

export default useAuthActions;
