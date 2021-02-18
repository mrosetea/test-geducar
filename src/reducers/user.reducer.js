import {
    REQUEST_USERS_INIT,
    REQUEST_USERS_SUCCESS,
    REQUEST_USERS_ERROR,
    SELECT_USER,
    CLEAR_USER
} from "constants/user.types";

const initialState = {
    users: [],
    userSelected: -1,
    loading: false,
    error: false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type){
        case REQUEST_USERS_INIT:
            return { ...initialState, loading: true };
        case REQUEST_USERS_SUCCESS:
            return { ...state, users: [...action.users], loading: false, error: false };
        case REQUEST_USERS_ERROR:
            return { ...state, users: [], loading: false, error: action.error };
        case SELECT_USER:
            return { ...state, userSelected: action.userSelected };
        case CLEAR_USER:
            return { ...state, userSelected: -1};
        default:
            return state;
    }
};

export default userReducer;