

import { combineEpics } from 'redux-observable';
import { fetchUsersEpic } from '../Users/Store/users-epic'; 
import { fetchJumpsEpic } from '../Jumps/Store/jumps-epic'; 

export default combineEpics(
    fetchUsersEpic,
    fetchJumpsEpic
);