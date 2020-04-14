import { JumpsApi } from '../Api/JumpsApi';
import { from, of } from 'rxjs';
import { catchError, filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';
import { JumpsActions } from './';

const api = new JumpsApi('http://localhost:3001/v1');

export const fetchJumpsEpic = action$ => action$.pipe(
    filter(isActionOf(JumpsActions.fetchJumps.request)),
    switchMap(action => 
        from(api.getAllJumps(action.payload.token, action.payload.locationId)).pipe(
            map(result => JumpsActions.fetchJumps.success(result)),
            catchError(error => of(JumpsActions.fetchJumps.failure(error))),
            takeUntil(action$.pipe(filter(isActionOf(JumpsActions.fetchJumps.cancel))))
        )
    )
);

export const createJumpEpic = action$ => action$.pipe(
    filter(isActionOf(JumpsActions.createJump.request)),
    switchMap(action => 
        from(api.createJump(action.payload.token, action.payload.locationId, action.payload.jumpName)).pipe(
            map(result => JumpsActions.createJump.success(result)),
            catchError(error => of(JumpsActions.createJump.failure(error))),
            takeUntil(action$.pipe(filter(isActionOf(JumpsActions.createJump.cancel))))
        )
    )
);