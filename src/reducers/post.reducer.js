import {REQUEST_POSTS_INIT, REQUEST_POSTS_SUCCESS, REQUEST_POSTS_ERROR} from 'constants/post.types';

const initialState = {
    posts: [],
    loading: false,
    error: null
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_POSTS_INIT:
            return {...initialState, loading: true};
        case REQUEST_POSTS_SUCCESS:
            return { ...state, posts: [...action.posts] };
        case REQUEST_POSTS_ERROR:
            return {};
        default:
            return state;
    }
};

export default postReducer;