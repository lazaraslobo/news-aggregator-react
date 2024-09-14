import { createAction } from '@reduxjs/toolkit';
import {SAGA_ACTION_TYPES, REDUCER_ACTION_TYPES} from "./actionTypes";
import {ArticlesFetchApiResponseType} from "./dataTypes";

export const HOME_SAGA_ACTIONS = {
    fetchArticles: createAction(SAGA_ACTION_TYPES.FETCH_ARTICLES),
}

export const HOME_REDUCER_ACTIONS = {
    setProcessing: createAction<{isProcessing: boolean}>(REDUCER_ACTION_TYPES.SET_PROCESSING),
    articlesFetchCompleted: createAction<ArticlesFetchApiResponseType>(REDUCER_ACTION_TYPES.FETCH_ARTICLES_COMPLETED),
}