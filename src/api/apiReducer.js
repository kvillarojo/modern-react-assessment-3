import {JsonPlaceHolder} from "../services/JsonPlaceHolder";

export const apiReducer = (endpoint, method, data) => {
    const userPostServices = new JsonPlaceHolder();
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
