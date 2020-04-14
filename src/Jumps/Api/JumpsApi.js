
import { BaseClient } from "../../Services/BaseClient";

export class JumpsApi extends BaseClient {

    constructor(baseUrl, instance) {
        super(baseUrl, instance);
    }

    /**
     * Retrieves a list of jumps for a given location
     * @param locationId The unique id of the location
     */
    async getAllJumps(token, locationId) {
        let url = this.baseUrl + "/locations/{locationId}/jumps";
        url = url.replace("{locationId}", encodeURIComponent(locationId));

        const options = {
            method: "GET",
            url,
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token,
            },
        };

        const response = await this.instance.request(options);
        return this.processGetAllJumps(response);
    }

    /**
     * Retrieves a specific jump under a given location
     * @param locationId The unique id of the location
     * @param jumpId The unique id of the jump
     */
    async getJump(token, locationId, jumpId) {
        let url = this.baseUrl + "/locations/{locationId}/jumps/{jumpId}";
        url = url.replace("{locationId}", encodeURIComponent(locationId));
        url = url.replace("{jumpId}", encodeURIComponent(jumpId));

        const options = {
            method: "GET",
            url,
            headers: {
                Accept: "application/json",
                Authorization: "Bearer " + token,
            },
        };

        const response = await this.instance.request(options);
        return this.processGetJump(response);
    }

    /**
     * Creates a specific jump under a given location
     * @param locationId The unique id of the location
     * @param jumpId The unique id of the jump
     */
    async createJump(token, locationId, jumpName) {
        let url = this.baseUrl + "/locations/{locationId}/jumps";
        url = url.replace("{locationId}", encodeURIComponent(locationId));

        const data = {
            name: jumpName
        };

        const options = {
            method: "POST",
            url,
            headers: {
                Accept: "application/json",
            },
            data: data
        };

        const response = await this.instance.request(options);
        return this.processCreateJump(response);
    }

    processGetAllJumps(response) {
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

    processGetJump(response) {
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

    processCreateJump(response) {
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