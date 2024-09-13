import { call, put, takeEvery } from 'redux-saga/effects';
import { AUTH_LOGIN } from './types';
import { authLogin } from './actions';

function* handleLogin(action: ReturnType<typeof authLogin>) {
    // Handle login logic here (e.g., API call)
    try {
        console.log("at saga ", action)
        // Simulate API call
        yield call(() => new Promise((resolve) => setTimeout(resolve, 1000)));
        // Dispatch success action or update state
    } catch (error) {
        // Handle error
    }
}

function* authSaga() {
    yield takeEvery(AUTH_LOGIN, handleLogin);
}

export default authSaga;
