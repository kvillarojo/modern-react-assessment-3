import initialState from "../constants/initialSate";
import * as type from '../constants/actionTypes'

export default function userPostReducer(state = initialState.userPostState, action) {
    switch (action.type) {
        case type.GET_USER_POST_REQUEST:
            return {...state, isFetching: true }
        case type.GET_USER_POST_SUCCESS:
            return {...state, isFetching: false, data: action.data, message:'Successfull'}
        case type.GET_USER_POST_ERROR:
            return {...state, isFetching: false, data: [], message:'Error', error: action.error}
        case type.ADD_USER_POST_REQUEST:
            return {...state, sendingRequest: true , isAdded: false, error: null}
        case type.ADD_USER_POST_SUCCESS:
            return {...state, sendingRequest: false, newData: action.data, isAdded: true, message:'Successfull'}
        case type.ADD_USER_POST_ERROR:
            return {...state, sendingRequest: false, newData: [], message:'Error', isAdded: false, error: action.error}
        default:
            return state
    }
}
