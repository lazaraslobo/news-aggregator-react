import { call, put, takeEvery } from 'redux-saga/effects';
import { SAGA_ACTION_TYPES } from './actionTypes';
import { SAGA_ACTIONS, REDUCER_ACTIONS } from './actions';
import {postApi_logUserIn, postApi_createNewAccount} from "../../apis";
import {AxiosResponse} from "axios";
import { AxiosError } from 'axios';

function* handleLogin(action: ReturnType<typeof SAGA_ACTIONS.authLogin>) {
    try {
        yield put(REDUCER_ACTIONS.setProcessing({ isProcessing: true }));
        const response: AxiosResponse<any> = yield call(postApi_logUserIn, action.payload);
        if(response.data?.token && Object.keys(response.data?.user).length > 0) {
            yield put(REDUCER_ACTIONS.authLoginComplete({ isAuthenticated: true }));
            window.location.href = window.location.origin;
        }
    } catch (error) {
        console.error("SAGA ERROR =>", error);
    }
}

function* handleCreateNewAccount(action: ReturnType<typeof SAGA_ACTIONS.createAccount>) {
    try {
        console.log("AT SAGA ", action.payload);
        yield put(REDUCER_ACTIONS.setProcessing({ isProcessing: true }));
        const response: AxiosResponse<any> = yield call(postApi_createNewAccount, action.payload);
        if (action.payload.onSuccessCallback){
            action.payload.onSuccessCallback();
        }
    } catch (error) {
        console.error("SAGA ERROR =>", error);
        if (error instanceof AxiosError) {
            console.log("ERRROR CALLBACK ", action.payload);
            if (action.payload.onErrorCallback){
                action.payload.onErrorCallback(error?.response?.data?.message);
            }
        }
    } finally {
        yield put(REDUCER_ACTIONS.setProcessing({ isProcessing: false}));
    }
}

function* authSaga() {
    yield takeEvery(SAGA_ACTION_TYPES.AUTH_LOGIN, handleLogin);
    yield takeEvery(SAGA_ACTION_TYPES.AUTH_CREATE_NEW_ACCOUNT, handleCreateNewAccount);
}

export default authSaga;
