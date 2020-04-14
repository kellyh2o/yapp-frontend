
import { BaseClient } from "../../Services/BaseClient";

export class AuthenticationApi extends BaseClient {

    /**
     * Logs in the user
     * @param email The user's email address
     * @param password The user's password
     */
    async login(username, password) {

        let url = this.baseUrl + "/auth/login";
        let data = {
            username: username,
            password: password
        };

        const options = {
            method: "POST",
            url,
            headers: {
                "Content-Type": "application/json",
            },
            data: data
        };

        const response = await this.instance.request(options);
        return this.processLoginResponse(response);
    }


    /**
     * Registers a new user in the system
     * @param firstName The first name of the new user
     * @param lastName The last name of the new user
     * @param email The email address of the new user
     * @param password The password of the new user
     */
    async registerUser(firstName, lastName, email, username, password) {
        let url = this.baseUrl + "/auth/register";
        let data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            username: username,
            password: password
        };

        const options = {
            method: "POST",
            url,
            headers: {
                "Content-Type": "application/json",
            },
            data: data
        };

        const response = await this.instance.request(options);
        return this.processRegisterUserResponse(response);
    }

    processLoginResponse(response) {
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

    processRegisterUserResponse(response) {
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