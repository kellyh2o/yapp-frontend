

import { combineEpics } from 'redux-observable';
import { fetchUsersEpic, pingEpic } from '../Users/Store/user-epic'; 

export default combineEpics(
    //...Object.values(fetchUsersEpic)
    fetchUsersEpic,
    //pingEpic
);