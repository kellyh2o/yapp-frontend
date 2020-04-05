
import { BaseClient } from "../../Services/BaseClient";

export class JumpsApi extends BaseClient {

    constructor(baseUrl, instance) {
        super(baseUrl, instance);
    }

    /**
     * Retrieves a list of jumps for a given project
     * @param projectId The unique id of the project
     */
    async getAllJumps(projectId) {
        let url = this.baseUrl + "/locations/{locationId}/jumps";
        url = url.replace("{locationId}", encodeURIComponent(projectId));

        const options = {
            method: "GET",
            url,
            headers: {
                Accept: "application/json",
            },
        };

        const response = await this.instance.request(options);
        return this.processGetAllJumps(response);
    }

    /**
     * Retrieves a specific jump under a given project
     * @param projectId The unique id of the project
     * @param jumpId The unique id of the jump
     */
    async getJump(projectId, jumpId) {
        let url = this.baseUrl + "/locations/{locationId}/jumps/{jumpId}";
        url = url.replace("{locationId}", encodeURIComponent(projectId));
        url = url.replace("{jumpId}", encodeURIComponent(jumpId));

        const options = {
            method: "GET",
            url,
            headers: {
                //Authorization: "Bearer " + LoginContainer.Instance.Token,
                Accept: "application/json",
            },
        };

        const response = await this.instance.request(options);
        return this.processJumps(response);
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

    processjumps(response) {
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