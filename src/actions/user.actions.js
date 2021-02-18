import {
    REQUEST_USERS_INIT,
    REQUEST_USERS_SUCCESS,
    REQUEST_USERS_ERROR,
    SELECT_USER,
    CLEAR_USER
} from 'constants/user.types';
import axios from 'apis/jsonPlaceholder.instance';

const requestUsersInit = () => ({ type: REQUEST_USERS_INIT });
const requestUsersSuccess = (users) => ({ type: REQUEST_USERS_SUCCESS, users });
const requestUsersError = (error) => ({ type: REQUEST_USERS_ERROR, error });

export function getUsers () {
    return async (dispatch) => {
        try {
            dispatch(requestUsersInit());
            const response = await axios.get('/users');
            dispatch(requestUsersSuccess([ ...response.data] ));
        }catch (error){
            dispatch(requestUsersError(''));
        }
    }
}

export function setUserSelected (index) {
    return {
        type: SELECT_USER,
        userSelected: index,
    };
}

export function clearUserSelected () {
    return {
        type: CLEAR_USER,
    };
}