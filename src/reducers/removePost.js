// import initialState from "../constants/initialSate";
import * as type from '../constants/actionTypes'
import {DeletedItems} from "../helpers/deletedITems";

export default function removePost(state = {error: '', message: '', isRemove: false, removeRequest: false}, action) {
    switch (action.type) {
        case type['DELETE_USER_POST_REQUEST']:
            return {...state, removeRequest: true }
        case type['DELETE_USER_POST_SUCCESS']:
            const deletedItems = new DeletedItems();
            deletedItems.savePostID(action.data.id);
            return {...state, isRemove: true, message:'Successfull', removeRequest: false }
        case type.DELETE_USER_POST_ERROR:
            return {...state, isRemove: false, message:'Error', error: action.error, removeRequest: false }
        default:
            return state
    }
}
