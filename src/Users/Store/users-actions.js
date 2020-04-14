import { createAsyncAction } from 'typesafe-actions';

export const FETCH_USERS = "users/FETCH_USERS";
export const FETCH_USERS_SUCCESS = "users/FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "users/FETCH_USERS_FAILURE";
export const FETCH_USERS_CANCEL = "users/FETCH_USERS_CANCEL";

export const FETCH_USER = "users/FETCH_USER";
export const FETCH_USER_SUCCESS = "users/FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "users/FETCH_USER_FAILURE";
export const FETCH_USER_CANCEL = "users/FETCH_USER_CANCEL";

export const FETCH_ME = "users/FETCH_ME";
export const FETCH_ME_SUCCESS = "users/FETCH_ME_SUCCESS";
export const FETCH_ME_FAILURE = "users/FETCH_ME_FAILURE";
export const FETCH_ME_CANCEL = "users/FETCH_ME_CANCEL";

export const fetchUsers = createAsyncAction(
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    FETCH_USERS_CANCEL
)();

export const fetchMe = createAsyncAction(
    FETCH_ME,
    FETCH_ME_SUCCESS,
    FETCH_ME_FAILURE,
    FETCH_ME_CANCEL
)();

