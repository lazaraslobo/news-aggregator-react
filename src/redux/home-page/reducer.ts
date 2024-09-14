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
            const key = action.payload.key;
            const value = action.payload.value;

            // Ensure we have a valid selection array
            const selection = state.userFilterSelections[key] || [];

            // Check if the value is already in the selection
            if (selection.includes(value)) {
                // Remove the value from the selection
                const updatedSelection = selection.filter(item => item !== value);

                // If the selection is now empty, remove the key from the userFilterSelections
                if (updatedSelection.length === 0) {
                    const { [key]: _, ...remainingSelections } = state.userFilterSelections;
                    state.userFilterSelections = remainingSelections;
                } else {
                    state.userFilterSelections[key] = updatedSelection;
                }
            } else {
                // Add the value to the selection if it's not already included
                state.userFilterSelections[key] = [...selection, value];
            }

            console.log("UPDATED ", JSON.stringify(state.userFilterSelections, null, 2));

            state.isProcessing = false;
            state.isSuccess = true;
            state.isFailed = false;
        })
});

export default homePageReducer;
