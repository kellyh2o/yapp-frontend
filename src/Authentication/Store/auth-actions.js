import { createAsyncAction, createStandardAction } from 'typesafe-actions';

export const LOGIN_USER = "auth/LOGIN_USER";
export const LOGIN_USER_SUCCESS = "auth/LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "auth/LOGIN_USER_FAILURE";
export const LOGIN_USER_CANCEL = "auth/LOGIN_USER_CANCEL";

export const REGISTER_USER = "auth/REGISTER_USER";
export const REGISTER_USER_SUCCESS = "auth/REGISTER_USER_SUCCESS";
export const REGISTER_USER_FAILURE = "auth/REGISTER_USER_FAILURE";
export const REGISTER_USER_CANCEL = "auth/REGISTER_USER_CANCEL";

export const loginUser = createAsyncAction(
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    LOGIN_USER_CANCEL
)();

export const registerUser = createAsyncAction(
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    REGISTER_USER_CANCEL
)();

