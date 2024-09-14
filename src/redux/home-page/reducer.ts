import { createReducer } from '@reduxjs/toolkit';
import type { HomePageStateType } from './dataTypes';
import { HOME_REDUCER_ACTIONS } from './actions';

const initialState: HomePageStateType = {
    topics: [],
    articles: {},
    isFailed: false,
    isProcessing: false,
    isSuccess: false,
    authors: {},
    sources: {}
};

const homePageReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(HOME_REDUCER_ACTIONS.setProcessing, (state, action) => {
            return {
                ...state,
                isProcessing: action.payload.isProcessing,
                isSuccess: false,
                isFailed: false,
            }
        }).addCase(HOME_REDUCER_ACTIONS.articlesFetchCompleted, (state, action) => {
            return {
                ...state,
                articles: action.payload.articles,
                topics: action.payload.topics,
                isProcessing: false,
                isSuccess: true,
                isFailed: false,
            }
    })
});

export default homePageReducer;
