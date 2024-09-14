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
    sources: {},
    userFilterSelections: {}
};

const homePageReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(HOME_REDUCER_ACTIONS.setProcessing, (state, action) => {
            state.isProcessing = action.payload.isProcessing;
            state.isSuccess = false;
            state.isFailed = false;
        })
        .addCase(HOME_REDUCER_ACTIONS.articlesFetchCompleted, (state, action) => {
            state.articles = action.payload.articles;
            state.topics = action.payload.topics;
            state.authors = action.payload.authors;
            state.sources = action.payload.sources;
            state.isProcessing = false;
            state.isSuccess = true;
            state.isFailed = false;
        })
        .addCase(HOME_REDUCER_ACTIONS.updateUserFilterSelectionCompleted, (state, action) => {
            let selection = state.userFilterSelections[action.payload.key] || [];

            if(selection.includes(action.payload.value)) {
                selection = selection.filter(item => item !== action.payload.value);
            } else {
                selection.push(action.payload.value);
            }

            state.userFilterSelections[action.payload.key] = selection;
            state.isProcessing = false;
            state.isSuccess = true;
            state.isFailed = false;
    })
});

export default homePageReducer;
