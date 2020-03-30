
import { BaseClient } from "../../Client/BaseClient";

export class UserApi extends BaseClient {

    constructor(baseUrl, instance) {
        super(baseUrl, instance);
    }

    async getAllUsers() {
        let url = this.baseUrl + "/users";

        const options = {
            method: "GET",
            url,
            headers: {
                Accept: "application/json",
            },
        };

        const response = await this.instance.request(options);
        return this.processGetAllUsers(response);
    }

    processGetAllUsers(response) {
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