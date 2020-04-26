import { UserApi } from '../Api/UserApi';
import { from, of } from 'rxjs';
import { catchError, filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { fetchUsers, fetchMe, updateMe } from './users-actions';

const api = new UserApi('http://localhost:3001/v1');

export const fetchUsersEpic = action$ => action$.pipe(
    filter(isActionOf(fetchUsers.request)),
    switchMap(action => 
        from(api.getAllUsers(action.payload)).pipe(
            map(result => fetchUsers.success(result)),
            catchError(error => of(fetchUsers.failure(error))),
            takeUntil(action$.pipe(filter(isActionOf(fetchUsers.cancel))))
        )
    )
);

export const fetchMeEpic = action$ => action$.pipe(
    filter(isActionOf(fetchMe.request)),
    switchMap(action => 
        from(api.getMe(action.payload)).pipe(
            map(result => fetchMe.success(result)),
            catchError(error => of(fetchMe.failure(error))),
            takeUntil(action$.pipe(filter(isActionOf(fetchMe.cancel))))
        )
    )
);

export const updateMeEpic = action$ => action$.pipe(
    filter(isActionOf(updateMe.request)),
    switchMap(action => 
        from(api.updateMe(action.payload.token, action.payload.user)).pipe(
            map(result => updateMe.success(result)),
            catchError(error => of(updateMe.failure(error))),
            takeUntil(action$.pipe(filter(isActionOf(updateMe.cancel))))
        )
    )
);