import axios from 'apis/jsonPlaceholder.instance';
import {
    REQUEST_COMMENTS_INIT,
    REQUEST_COMMENTS_SUCCESS,
    REQUEST_COMMENTS_ERROR,
    SET_COMMENTS_ARE_SHOWN
} from "constants/comment.types";

const requestCommentsInit = () => ({ type: REQUEST_COMMENTS_INIT });
const requestCommentsSuccess = (comments) => ({ type: REQUEST_COMMENTS_SUCCESS, comments });
const requestCommentsError = (error) => ({ type: REQUEST_COMMENTS_ERROR, error });
export const setCommentsAreShown = (commentsAreShown) => ({ type: SET_COMMENTS_ARE_SHOWN, commentsAreShown });

export function getComments (idPost) {
    return async (dispatch) => {
        try {
            dispatch(requestCommentsInit());
            const response = await axios.get(`/posts/${idPost}/comments`);
            dispatch(requestCommentsSuccess([ ...response.data] ));
            dispatch(setCommentsAreShown(true));
        }catch (error){
            console.log(error);
            dispatch(requestCommentsError(''));
        }
    }
}