import { LocationsApi } from '../Api/LocationsApi';
import { LocationsActions } from './';
import { from, of } from 'rxjs';
import { catchError, filter, map, switchMap, takeUntil } from 'rxjs/operators';
import { isActionOf } from 'typesafe-actions';


const api = new LocationsApi('http://localhost:3001/v1');


export const fetchLocationsEpic = action$ => action$.pipe(
    filter(isActionOf(LocationsActions.fetchLocations.request)),
    switchMap(action => 
        from(api.getAllLocations(action.payload)).pipe(
            // tap(locations => {
            //     if (locations) {
            //         console.log(locations.find(location => location.name === "Regis MTB Park")._id);
            //         JumpsActions.fetchJumps.request(action.payload.token, locations.find(location => location.name === "Regis MTB Park")._id);
            //     }
            // }),
            map(result => LocationsActions.fetchLocations.success(result)),
            catchError(error => of(LocationsActions.fetchLocations.failure(error))),
            takeUntil(action$.pipe(filter(isActionOf(LocationsActions.fetchLocations.cancel))))
        )
    )
);


export const createLocationEpic = action$ => action$.pipe(
    filter(isActionOf(LocationsActions.createLocation.request)),
    switchMap(action => 
        from(api.createLocation(action.payload.token, action.payload.locationName)).pipe(
            map(result => LocationsActions.createLocation.success(result)),
            catchError(error => of(LocationsActions.createLocation.failure(error))),
            takeUntil(action$.pipe(filter(isActionOf(LocationsActions.createLocation.cancel))))
        )
    )
);

