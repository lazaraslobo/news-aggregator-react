import { call, put, takeEvery } from 'redux-saga/effects';
import { SAGA_ACTION_TYPES } from './actionTypes';
import { HOME_SAGA_ACTIONS } from './actions';
import {getApi_getAllArticles} from "../../apis";
import {ArticlesFetchApiResponseType} from './dataTypes';
import {AxiosResponseType} from "../../interfaces-types/AxiosResponseType";
function* getAllArticles(action: ReturnType<typeof HOME_SAGA_ACTIONS.fetchArticles>) {
    try {
        const response: AxiosResponseType<ArticlesFetchApiResponseType> = yield call(getApi_getAllArticles)
        console.log("AT SAGA BRUHHHH ", response.data.data.articles);
    } catch (error) {
        console.error("SAGA ERROR =>", error);
    }
}

function* homePageSaga() {
    yield takeEvery(SAGA_ACTION_TYPES.FETCH_ARTICLES, getAllArticles);
}

export default homePageSaga;
