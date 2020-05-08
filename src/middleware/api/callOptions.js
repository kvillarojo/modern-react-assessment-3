import {UserService} from "./services/UserService";

export const OptionCalls = (endpoint, method, data) => {
    const userPostServices = new UserService();
          userPostServices.setEndpoint(endpoint);

    switch (method){
        case 'POST':
            return userPostServices.post(data);
        case 'DELETE':
            return userPostServices.delete(data);
        default:
            return userPostServices.get();
    }
}
