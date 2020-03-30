import { ofType } from 'redux-observable';
import { UserApi } from '../Api/UserApi';
import { from, of } from 'rxjs';
import { catchError, filter, map, switchMap, mergeMap, takeUntil, mapTo, delay } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { fetchUsers, FETCH_USERS } from '../Store/user-actions';
import { ajax } from 'rxjs/ajax';

const fetch = require('node-fetch');

const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';
const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload });

const api = new UserApi('http://localhost:3000/v1');

export const fetchUsersEpic = action$ => action$.pipe(
    filter(isActionOf(fetchUsers.request)),
    switchMap(action => 
        from(api.getAllUsers()).pipe(
            map(result => fetchUsers.success(result)),
            catchError(error => of(fetchUsers.failure(error))),
            takeUntil(action$.pipe(filter(isActionOf(fetchUsers.cancel))))
        )
    )
);

// export const fetchUsersEpic = action$ => action$.pipe(
//     ofType(fetchUsers.request),
//     map(() => console.log("Hello world!"))
//     // mergeMap(action =>
//     //     ajax.getJSON(`https://api.github.com/users/kellyh2o`).pipe(
//     //       map(response => fetchUserFulfilled(response))
//     //     )
//     // )
// );

export const pingEpic = action$ => action$.pipe(
    filter(action => action.type === 'PING'),
    delay(1000),
    mapTo({ type: 'PONG' })
);