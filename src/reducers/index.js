import {combineReducers} from "redux";
import userReducer from "reducers/user.reducer";
import postReducer from "reducers/post.reducer";
import commentReducer from "reducers/comment.reducer";

export default combineReducers({
    user: userReducer,
    post: postReducer,
    comment: commentReducer
});