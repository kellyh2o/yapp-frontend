import axios from "axios";

export class BaseClient {
    baseUrl = null;


    constructor(url, instance) {
        this.instance = instance ? instance : axios.create();
        this.baseUrl = url;
    }

    processHeaders(response) {
        const _headers = {};
        if (response.headers && typeof(response.headers === "object")) {
            for (const header in response.headers) {
                if (response.headers.hasOwnProperty(header)) {
                    _headers[header] = response.headers[header];
                }
            }
        }
        return _headers;
    }

    handleBadRequest(response, headers, status) {
        let result400 = response.data;
        throw new Error("There was an error with your request. " + result400);
    }

    handleUnauthorized(response, headers, status) {
        let result401 = response.data;
        throw new Error("The client is not authorized to make this request. " + result401);
    }

    handleForbidden(response, headers, status) {
        let result403 = response.data;
        throw new Error("The request is not authenticated or has failed authentication. " + result403);
    }

    handleNotFound(response, headers, status) {
        let result404 = response.data;
        throw new Error("The requested resource does not exist in the system. " + result404);
    }

    handleInternalServerError(response, headers, status) {
        let result500 = response.data;
        throw new Error("A server-side error has occurred. " + result500);
    }

    handleUnexpectedResponse(response, headers, status) {
        throw new Error("An unexpected server response or error was received. " + response.data);
    }

    handleGenericResponse(response, headers, status) {
        switch(status) {
            case 400:
                this.handleBadRequest(response);
                break;
            case 401:
                this.handleUnauthorized(response);
                break;
            case 403:
                this.handleForbidden(response);
                break;
            case 404:
                this.handleNotFound(response);
                break;
            case 500:
                this.handleInternalServerError(response);
                break;
            default:
                this.handleUnexpectedResponse(response);
                break;
        }
    }
}