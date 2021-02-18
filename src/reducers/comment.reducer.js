import {REQUEST_COMMENTS_INIT, REQUEST_COMMENTS_SUCCESS, REQUEST_COMMENTS_ERROR, SET_COMMENTS_ARE_SHOWN} from 'constants/comment.types';

const initialState = {
    comments: [],
    loading: false,
    error: null,
    commentsAreShown: false,
};

const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_COMMENTS_INIT:
            return {...initialState, loading: true};
        case REQUEST_COMMENTS_SUCCESS:
            return { ...state, comments: [...action.comments] };
        case SET_COMMENTS_ARE_SHOWN:
            return { ...state, commentsAreShown: action.commentsAreShown };
        case REQUEST_COMMENTS_ERROR:
            return {};
        default:
            return state;
    }
};

export default commentReducer;