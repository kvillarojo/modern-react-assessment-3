import initialState from "../constants/initialSate";
import * as type from '../constants/actionTypes'

export default function userReducer(state = initialState.userListState, action) {
  switch (action.type) {
    case type.GET_USER_LIST_REQUEST:
      return {...state, isFetching: true }
    case type.GET_USER_LIST_SUCCESS:
      return {...state, isFetching: false, data: action.data, message:'Successfull'}
    case type.GET_USER_LIST_ERROR:
      return {...state, isFetching: false, data: [], message:'Error', error: action.error}
    default:
      return state
  }
}
