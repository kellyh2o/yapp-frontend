import { JumpsApi } from '../Api/JumpsApi';
import { from, of } from 'rxjs';
import { catchError, filter, map, switchMap, mergeMap, takeUntil, mapTo, delay } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { JumpsActions } from './';
import { fetchJumps } from '../../Jumps/Store/jumps-actions';

const api = new JumpsApi('http://localhost:3000/v1');

export const fetchJumpsEpic = action$ => action$.pipe(
    filter(isActionOf(fetchJumps.request)),
    switchMap(action => 
        from(api.getAllJumps("5e7e47aae9e6e7358bc49d31")).pipe(
            map(result => fetchJumps.success(result)),
            catchError(error => of(fetchJumps.failure(error))),
            takeUntil(action$.pipe(filter(isActionOf(fetchJumps.cancel))))
        )
    )
);