import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { authLogin, authLogout } from '../redux/auth/actions';

const useAuthActions = () => {
    const dispatch = useDispatch<AppDispatch>();

    const login = (user: string) => dispatch(authLogin({ user }));
    const logout = () => dispatch(authLogout({}));

    return { login, logout };
};

export default useAuthActions;
