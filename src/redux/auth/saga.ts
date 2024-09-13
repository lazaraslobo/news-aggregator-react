import { call, put, takeEvery } from 'redux-saga/effects';
import { SAGA_ACTION_TYPES } from './actionTypes';
import { SAGA_ACTIONS, REDUCER_ACTIONS } from './actions';
import {post_logUserIn} from "../../apis";
import {AxiosResponse} from "axios";

function* handleLogin(action: ReturnType<typeof SAGA_ACTIONS.authLogin>) {
    // Handle login logic here (e.g., API call)
    try {
        yield put(REDUCER_ACTIONS.setProcessing({ isProcessing: true }));
        const response: AxiosResponse<any> = yield call(post_logUserIn, action.payload)
        console.log("RESPONSE ", response);
        yield put(REDUCER_ACTIONS.authLoginComplete({ isAuthenticated: true }));
        // Dispatch success action or update state
    } catch (error) {
        console.error("SAGA ERROR =>", error);
        // Handle error
    }
}

function* authSaga() {
    yield takeEvery(SAGA_ACTION_TYPES.AUTH_LOGIN, handleLogin);
}

export default authSaga;
