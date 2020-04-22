import { AuthenticationApi } from '../Api/AuthenticationApi';
import { AuthActions } from './';
import { from, of } from 'rxjs';
import { catchError, filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

const api = new AuthenticationApi('http://localhost:3001/v1');

export const loginUserEpic = action$ => action$.pipe(
    filter(isActionOf(AuthActions.loginUser.request)),
    switchMap(action => 
        from(api.login(action.payload.username, action.payload.password)).pipe(
            map(result => AuthActions.loginUser.success(result)),
            catchError(error => of(AuthActions.loginUser.failure(error))),
            takeUntil(action$.pipe(filter(isActionOf(AuthActions.loginUser.cancel))))
        )
    )
);

export const logoutUserEpic = action$ => action$.pipe(
    filter(isActionOf(AuthActions.logoutUser.request)),
    switchMap(action => 
        from(api.logout(action.token)).pipe(
            map(result => AuthActions.logoutUser.success(result)),
            catchError(error => of(AuthActions.logoutUser.failure(error))),
            takeUntil(action$.pipe(filter(isActionOf(AuthActions.logoutUser.cancel))))
        )
    )
);

export const registerUserEpic = action$ => action$.pipe(
    filter(isActionOf(AuthActions.registerUser.request)),
    switchMap(action => 
        from(api.registerUser(action.payload.firstName, action.payload.lastName, action.payload.email, action.payload.username, action.payload.password)).pipe(
            map(result => AuthActions.registerUser.success(result)),
            catchError(error => of(AuthActions.registerUser.failure(error))),
            takeUntil(action$.pipe(filter(isActionOf(AuthActions.registerUser.cancel))))
        )
    )
);