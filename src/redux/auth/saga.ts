import { call, put, takeEvery } from 'redux-saga/effects';
import { SAGA_ACTION_TYPES } from './actionTypes';
import { SAGA_ACTIONS, REDUCER_ACTIONS } from './actions';
import {post_logUserIn} from "../../apis";
import {AxiosResponse} from "axios";

function* handleLogin(action: ReturnType<typeof SAGA_ACTIONS.authLogin>) {
    try {
        yield put(REDUCER_ACTIONS.setProcessing({ isProcessing: true }));
        const response: AxiosResponse<any> = yield call(post_logUserIn, action.payload);
        if(response.data?.token && Object.keys(response.data?.user).length > 0) {
            yield put(REDUCER_ACTIONS.authLoginComplete({ isAuthenticated: true }));
            window.location.href = window.location.origin;
        }
    } catch (error) {
        console.error("SAGA ERROR =>", error);
    }
}

function* authSaga() {
    yield takeEvery(SAGA_ACTION_TYPES.AUTH_LOGIN, handleLogin);
}

export default authSaga;
