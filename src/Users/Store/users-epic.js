import { UserApi } from '../Api/UserApi';
import { from, of } from 'rxjs';
import { catchError, filter, map, switchMap, mergeMap, takeUntil, mapTo, delay } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { fetchUsers } from './users-actions';
import { ajax } from 'rxjs/ajax';

const api = new UserApi('http://localhost:3001/v1');

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