import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { authReducer, authSaga } from './auth';
import { homeReducer, homeSaga } from './home-page';

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure store
const store = configureStore({
    reducer: {
        auth: authReducer,
        homePage: homeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

// Run saga
sagaMiddleware.run(authSaga);
sagaMiddleware.run(homeSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
