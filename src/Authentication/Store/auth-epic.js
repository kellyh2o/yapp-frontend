import { AuthenticationApi } from '../Api/AuthenticationApi';
import { AuthActions } from './';
import { from, of } from 'rxjs';
import { catchError, filter, map, switchMap, mergeMap, takeUntil, mapTo, delay } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';

//import api from '../../Services';


const api = new AuthenticationApi('http://localhost:3001/v1');

export const loginUserEpic = action$ => action$.pipe(
    filter(isActionOf(AuthActions.loginUser.request)),
    switchMap(action => 
        from(api.login(action.payload.email, action.payload.password)).pipe(
            map(result => AuthActions.loginUser.success(result)),
            catchError(error => of(AuthActions.loginUser.failure(error))),
            takeUntil(action$.pipe(filter(isActionOf(AuthActions.loginUser.cancel))))
        )
    )
);

export const registerUserEpic = action$ => action$.pipe(
    filter(isActionOf(AuthActions.registerUser.request)),
    switchMap(action => 
        from(api.registerUser(action.payload.firstName, action.payload.lastName, action.payload.email, action.payload.password)).pipe(
            map(result => AuthActions.registerUser.success(result)),
            catchError(error => of(AuthActions.registerUser.failure(error))),
            takeUntil(action$.pipe(filter(isActionOf(AuthActions.registerUser.cancel))))
        )
    )
);