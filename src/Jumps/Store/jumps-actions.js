import { createAsyncAction, createStandardAction } from 'typesafe-actions';

export const FETCH_JUMPS = "jumps/FETCH_JUMPS";
export const FETCH_JUMPS_SUCCESS = "jumps/FETCH_JUMPS_SUCCESS";
export const FETCH_JUMPS_FAILURE = "jumps/FETCH_JUMPS_FAILURE";
export const FETCH_JUMPS_CANCEL = "jumps/FETCH_JUMPS_CANCEL";

export const FETCH_JUMP = "jumps/FETCH_JUMP";
export const FETCH_JUMP_SUCCESS = "jumps/FETCH_JUMP_SUCCESS";
export const FETCH_JUMP_FAILURE = "jumps/FETCH_JUMP_FAILURE";
export const FETCH_JUMP_CANCEL = "jumps/FETCH_JUMP_CANCEL";

export const fetchJumps = createAsyncAction(
    FETCH_JUMPS,
    FETCH_JUMPS_SUCCESS,
    FETCH_JUMPS_FAILURE,
    FETCH_JUMPS_CANCEL
)();

export const fetchJump = createAsyncAction(
    FETCH_JUMP,
    FETCH_JUMP_SUCCESS,
    FETCH_JUMP_FAILURE,
    FETCH_JUMP_CANCEL
)();