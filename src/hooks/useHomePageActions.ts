import { useDispatch } from 'react-redux';
import { AppDispatch } from '../redux/store';
import { HOME_SAGA_ACTIONS } from '../redux/home-page/actions';

const useHomePageActions = () => {
    const dispatch = useDispatch<AppDispatch>();

    const fetchAllArticles = () => dispatch(HOME_SAGA_ACTIONS.fetchArticles());

    return { fetchAllArticles};
};

export default useHomePageActions;
