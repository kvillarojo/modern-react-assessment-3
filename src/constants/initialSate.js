
const initialState = {
    isFetching: false,
    data: [],
    error: null,
    message: '',
    status: ''
}

export default {
    userListState: {
        ...initialState,
    },
    userPostState:{
        ...initialState,
        sendingRequest: null,
        sendded: false,
        newData: [],
        isAdded: false,
    }
}
