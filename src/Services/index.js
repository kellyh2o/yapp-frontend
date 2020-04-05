import { AuthenticationApi } from '../Authentication/Api/AuthenticationApi';


const backendUrl = 'http://localhost:3001/v1';

export default {
    api: {
        authentication: new AuthenticationApi(backendUrl),
    }
}