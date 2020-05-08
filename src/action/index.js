import * as type from '../constants/actionTypes.js'

const fetchUser = login => ({
    [type.CALL_API]: {
        types: [ type.GET_USER_LIST_REQUEST, type.GET_USER_LIST_SUCCESS, type.GET_USER_LIST_ERROR ],
        endpoint: `users`,
        method: 'GET',
        data:{}
    }
})

export const loadUser = (requiredFields = []) => (dispatch, getState) => {
    return dispatch(fetchUser())
}

export const fetchUserPost = (userID) => ({
    [type.CALL_API]: {
        types: [ type.GET_USER_POST_REQUEST, type.GET_USER_POST_SUCCESS, type.GET_USER_POST_ERROR ],
        endpoint: `users/${userID}/posts`,
        method: 'GET',
        data: {
            'id': userID
        }
    }
})

export const removeUserPost = (postID) => ({
    [type.CALL_API]: {
        types: [ type.DELETE_USER_POST_REQUEST, type.DELETE_USER_POST_SUCCESS, type.DELETE_USER_POST_ERROR ],
        endpoint: `posts/${postID}`,
        method: 'DELETE',
        data: {
            'id': postID
        }
    }
})

export const addUserPost = (post) => ({
    [type.CALL_API]: {
        types: [ type.ADD_USER_POST_REQUEST, type.ADD_USER_POST_SUCCESS, type.ADD_USER_POST_ERROR ],
        endpoint: `posts`,
        method: 'POST',
        data: {
            ...post
        }
    }
})
