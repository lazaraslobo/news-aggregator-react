import { createAction } from '@reduxjs/toolkit';
import {SAGA_ACTION_TYPES, REDUCER_ACTION_TYPES} from "./actionTypes";
import {ArticlesFetchApiResponseType} from "./dataTypes";

export const HOME_SAGA_ACTIONS = {
    fetchArticles: createAction(SAGA_ACTION_TYPES.FETCH_ARTICLES),
    updateUserFilterSelection: createAction<{ key: string, value: string }>(SAGA_ACTION_TYPES.UPDATE_USER_FILTER_SELECTIONS),
}

export const HOME_REDUCER_ACTIONS = {
    setProcessing: createAction<{isProcessing: boolean}>(REDUCER_ACTION_TYPES.SET_PROCESSING),
    articlesFetchCompleted: createAction<ArticlesFetchApiResponseType>(REDUCER_ACTION_TYPES.FETCH_ARTICLES_COMPLETED),
    updateUserFilterSelectionCompleted: createAction<{ key: string, value: string }>(REDUCER_ACTION_TYPES.UPDATE_USER_FILTER_SELECTIONS_COMPLETED),
}