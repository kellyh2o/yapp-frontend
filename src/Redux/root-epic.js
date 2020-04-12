

import { combineEpics } from 'redux-observable';
import { fetchUsersEpic } from '../Users/Store/users-epic'; 
import { fetchJumpsEpic, createJumpEpic } from '../Jumps/Store/jumps-epic'; 
import { loginUserEpic, registerUserEpic } from '../Authentication/Store/auth-epic'; 
import { fetchLocationsEpic, createLocationEpic } from '../Locations/Store/locations-epic'; 

export default combineEpics(
    fetchUsersEpic,
    fetchJumpsEpic,
    createJumpEpic,
    loginUserEpic,
    registerUserEpic,
    fetchLocationsEpic,
    createLocationEpic
);