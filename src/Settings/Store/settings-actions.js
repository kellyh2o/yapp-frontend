import { createAsyncAction } from 'typesafe-actions';

export const UPDATE_PASSWORD = "settings/UPDATE_PASSWORD";
export const UPDATE_PASSWORD_SUCCESS = "users/settings/UPDATE_PASSWORD_SUCCESS";
export const UPDATE_PASSWORD_FAILURE = "users/settings/UPDATE_PASSWORD_FAILURE";
export const UPDATE_PASSWORD_CANCEL = "users/settings/UPDATE_PASSWORD_CANCEL";

export const updatePassword = createAsyncAction(
    UPDATE_PASSWORD,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_FAILURE,
    UPDATE_PASSWORD_CANCEL
)();