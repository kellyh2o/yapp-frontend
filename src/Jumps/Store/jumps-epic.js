import { JumpsApi } from '../Api/JumpsApi';
import { from, of } from 'rxjs';
import { catchError, filter, map, switchMap, mergeMap, takeUntil, mapTo, delay } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { JumpsActions } from './';

const api = new JumpsApi('http://localhost:3000/v1');

export const fetchJumpsEpic = action$ => action$.pipe(
    filter(isActionOf(JumpsActions.fetchJumps.request)),
    switchMap(action => 
        from(api.getAllJumps(action.payload, "5e7e47aae9e6e7358bc49d31")).pipe(
            map(result => JumpsActions.fetchJumps.success(result)),
            catchError(error => of(JumpsActions.fetchJumps.failure(error))),
            takeUntil(action$.pipe(filter(isActionOf(JumpsActions.fetchJumps.cancel))))
        )
    )
);