import { createAsyncAction, createStandardAction } from 'typesafe-actions';

export const FETCH_USERS = "users/FETCH_USERS";
export const FETCH_USERS_SUCCESS = "users/FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "users/FETCH_USERS_FAILURE";
export const FETCH_USERS_CANCEL = "users/FETCH_USERS_CANCEL";

export const fetchUsers = createAsyncAction(
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    FETCH_USERS_CANCEL
)();