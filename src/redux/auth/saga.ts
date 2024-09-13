import { call, put, takeEvery } from 'redux-saga/effects';
import { SAGA_ACTION_TYPES } from './actionTypes';
import { SAGA_ACTIONS, REDUCER_ACTIONS } from './actions';

function* handleLogin(action: ReturnType<typeof SAGA_ACTIONS.authLogin>) {
    // Handle login logic here (e.g., API call)
    try {
        console.log("at saga ", action)
        // Simulate API call
        yield call(() => new Promise((resolve) => setTimeout(resolve, 1000)));
        console.log("AFTER ", action)
        yield put(REDUCER_ACTIONS.setProcessing({ isProcessing: true }));

        yield call(() => new Promise((resolve) => setTimeout(resolve, 1000)));

        yield put(REDUCER_ACTIONS.authLoginComplete({ isAuthenticated: true }));
        // Dispatch success action or update state
    } catch (error) {
        // Handle error
    }
}

function* authSaga() {
    yield takeEvery(SAGA_ACTION_TYPES.AUTH_LOGIN, handleLogin);
}

export default authSaga;
