
import { BaseClient } from "../../Services/BaseClient";

export class LocationsApi extends BaseClient {

    /**
     * Retrieves a list of locations
     * @param token The authentication token
     */
    async getAllLocations(token) {
        let url = this.baseUrl + "/locations";

        const options = {
            method: "GET",
            url,
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token,
            },
        };

        const response = await this.instance.request(options);
        return this.processGetAllLocations(response);
    }

    /**
     * Creates a location
     * @param token The authentication token
     * @param projectName The name of the location
     */
    async createLocation(token, locationName) {

        let url = this.baseUrl + "/locations";
        let data = {
            name: locationName,
        };

        const options = {
            method: "POST",
            url,
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token,
            },
            data: data
        };

        const response = await this.instance.request(options);
        return this.processCreateLocationResponse(response);
    }

    processCreateLocationResponse(response) {
        const status = response.status;
        switch(status) {
            case 200:
                const result200 = response.data;
                return result200;
            default:
                this.handleGenericResponse(response);
                break;
        }

        return null;
    }

    processGetAllLocations(response) {
        const status = response.status;
        switch(status) {
            case 200:
                const result200 = response.data;
                return result200;
            default:
                this.handleGenericResponse(response);
                break;
        }

        return null;
    }
}