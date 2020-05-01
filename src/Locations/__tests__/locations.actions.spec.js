import { LocationsActions } from "../Store";
import { isOfType } from "typesafe-actions";

describe("Location actions", () => {
    it('should create a fetch locations action', () => {

        const payload = {
            token: "testToken"
        }

        const expectedAction = {
            type: LocationsActions.FETCH_LOCATIONS,
            payload: payload.token
        }

        expect(LocationsActions.fetchLocations.request(
            "testToken"
        )).toEqual(expectedAction);
    });
})