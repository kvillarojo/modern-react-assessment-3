import { combineReducers } from 'redux'
import user from './user.js'
import userPost from './userPost.js'
import removePost from './removePost.js'
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
    form: reduxFormReducer,
    user,
    userPost,
    removePost
})

export default rootReducer
