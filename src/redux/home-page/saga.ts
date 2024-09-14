import { call, put, takeEvery } from 'redux-saga/effects';
import { SAGA_ACTION_TYPES } from './actionTypes';
import { HOME_SAGA_ACTIONS } from './actions';
import {getApi_getAllArticles} from "../../apis";
import {ArticlesFetchApiResponseType} from './dataTypes';
import {AxiosResponseType} from "../../interfaces-types/AxiosResponseType";
import {HOME_REDUCER_ACTIONS} from "./actions";

function* getAllArticles(action: ReturnType<typeof HOME_SAGA_ACTIONS.fetchArticles>) {
    try {
        yield put(HOME_REDUCER_ACTIONS.setProcessing({ isProcessing: true }));
        const response: AxiosResponseType<ArticlesFetchApiResponseType> = yield call(getApi_getAllArticles)
        console.log("AT SAGA BRUHHHH ", response.data.data);
        yield put(HOME_REDUCER_ACTIONS.articlesFetchCompleted(response.data.data));
    } catch (error) {
        console.error("SAGA ERROR =>", error);
    }finally {
        // yield put(HOME_REDUCER_ACTIONS.setProcessing({ isProcessing: false }));
    }
}

function* updateUserFilterSelection(action: ReturnType<typeof HOME_SAGA_ACTIONS.updateUserFilterSelection>) {
    try {
        console.log("INNO ", action);
        yield put(HOME_REDUCER_ACTIONS.updateUserFilterSelectionCompleted(action.payload));
    } catch (error) {
        console.error("SAGA ERROR =>", error);
    }finally {
        // yield put(HOME_REDUCER_ACTIONS.setProcessing({ isProcessing: false }));
    }
}
function* homePageSaga() {
    yield takeEvery(SAGA_ACTION_TYPES.FETCH_ARTICLES, getAllArticles);
    yield takeEvery(SAGA_ACTION_TYPES.UPDATE_USER_FILTER_SELECTIONS, updateUserFilterSelection);
}

export default homePageSaga;
