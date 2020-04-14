import { createAsyncAction, createStandardAction } from 'typesafe-actions';
import { LocationsActions } from '../../Locations/Store/';

export const FETCH_JUMPS = "jumps/FETCH_JUMPS";
export const FETCH_JUMPS_SUCCESS = "jumps/FETCH_JUMPS_SUCCESS";
export const FETCH_JUMPS_FAILURE = "jumps/FETCH_JUMPS_FAILURE";
export const FETCH_JUMPS_CANCEL = "jumps/FETCH_JUMPS_CANCEL";

export const FETCH_JUMP = "jumps/FETCH_JUMP";
export const FETCH_JUMP_SUCCESS = "jumps/FETCH_JUMP_SUCCESS";
export const FETCH_JUMP_FAILURE = "jumps/FETCH_JUMP_FAILURE";
export const FETCH_JUMP_CANCEL = "jumps/FETCH_JUMP_CANCEL";

export const CREATE_JUMP = "jumps/CREATE_JUMP";
export const CREATE_JUMP_SUCCESS = "jumps/CREATE_JUMP_SUCCESS";
export const CREATE_JUMP_FAILURE = "jumps/CREATE_JUMP_FAILURE";
export const CREATE_JUMP_CANCEL = "jumps/CREATE_JUMP_CANCEL";

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

export const createJump = createAsyncAction(
    CREATE_JUMP,
    CREATE_JUMP_SUCCESS,
    CREATE_JUMP_FAILURE,
    CREATE_JUMP_CANCEL
)();

