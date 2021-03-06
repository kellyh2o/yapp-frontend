
import { BaseClient } from "../../Services/BaseClient";

export class UserApi extends BaseClient {
    async getMe(token) {
        let url = this.baseUrl + "/users/me";
        const options = {
            method: "GET",
            url,
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await this.instance.request(options);
        return this.processGetMe(response);
    }

    async updateMe(token, updatedUserData) {
        let url = this.baseUrl + "/users/me/update";
        const options = {
            method: "POST",
            url,
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
            data: updatedUserData
        };

        const response = await this.instance.request(options);
        return this.processUpdateMe(response);
    }

    async getAllUsers(token) {
        let url = this.baseUrl + "/users";

        const options = {
            method: "GET",
            url,
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            },
        };

        const response = await this.instance.request(options);
        return this.processGetAllUsers(response);
    }

    processGetMe(response) {
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

    processUpdateMe(response) {
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