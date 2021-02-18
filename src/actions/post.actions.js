import axios from 'apis/jsonPlaceholder.instance';
import {REQUEST_POSTS_INIT, REQUEST_POSTS_SUCCESS} from "constants/post.types";

const requestPostsInit = () => ({ type: REQUEST_POSTS_INIT });
const requestPostsSuccess = (posts) => ({ type: REQUEST_POSTS_SUCCESS, posts });
const requestPostsError = (error) => ({ type: REQUEST_POSTS_SUCCESS, error });

export function getPosts (idUser) {
    return async (dispatch) => {
        try {
            dispatch(requestPostsInit());
            const response = await axios.get(`/users/${idUser}/posts`);
            dispatch(requestPostsSuccess([ ...response.data] ));
        }catch (error){
            dispatch(requestPostsError(''));
        }
    }
}