import { createAsyncAction } from 'typesafe-actions';


export const FETCH_LOCATIONS = "locations/FETCH_LOCATIONS";
export const FETCH_LOCATIONS_SUCCESS = "locations/FETCH_LOCATIONS_SUCCESS";
export const FETCH_LOCATIONS_FAILURE = "locations/FETCH_LOCATIONS_FAILURE";
export const FETCH_LOCATIONS_CANCEL = "locations/FETCH_LOCATIONS_CANCEL";

export const fetchLocations = createAsyncAction(
    FETCH_LOCATIONS,
    FETCH_LOCATIONS_SUCCESS,
    FETCH_LOCATIONS_FAILURE,
    FETCH_LOCATIONS_CANCEL
)();


export const CREATE_LOCATION = "locations/CREATE_LOCATION";
export const CREATE_LOCATION_SUCCESS = "locations/CREATE_LOCATION_SUCCESS";
export const CREATE_LOCATION_FAILURE = "locations/CREATE_LOCATION_FAILURE";
export const CREATE_LOCATION_CANCEL = "locations/CREATE_LOCATION_CANCEL";

export const createLocation = createAsyncAction(
    CREATE_LOCATION,
    CREATE_LOCATION_SUCCESS,
    CREATE_LOCATION_FAILURE,
    CREATE_LOCATION_CANCEL
)();

