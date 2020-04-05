import { createAsyncAction, createStandardAction } from 'typesafe-actions';

export const FETCH_USERS = "users/FETCH_USERS";
export const FETCH_USERS_SUCCESS = "users/FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "users/FETCH_USERS_FAILURE";
export const FETCH_USERS_CANCEL = "users/FETCH_USERS_CANCEL";

export const FETCH_USER = "users/FETCH_USER";
export const FETCH_USER_SUCCESS = "users/FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "users/FETCH_USER_FAILURE";
export const FETCH_USER_CANCEL = "users/FETCH_USER_CANCEL";

export const fetchUsers = createAsyncAction(
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    FETCH_USERS_CANCEL
)();

export const fetchUser = createAsyncAction(
    FETCH_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    FETCH_USER_CANCEL
)();