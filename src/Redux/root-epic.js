

import { combineEpics } from 'redux-observable';
import { fetchUsersEpic } from '../Users/Store/users-epic'; 
import { fetchJumpsEpic } from '../Jumps/Store/jumps-epic'; 
import { loginUserEpic, registerUserEpic } from '../Authentication/Store/auth-epic'; 

export default combineEpics(
    fetchUsersEpic,
    fetchJumpsEpic,
    loginUserEpic,
    registerUserEpic
);