import React from 'react';
import './style.scss';
import {useDispatch} from "react-redux";
import {getComments} from "../../actions/comment.actions";

const Post = ({ post }) => {
    const dispatch = useDispatch();
    return (
        <div className="Post">
            <div className="Post__Title">
                Title: { post.title }
            </div>
            <div className="Post__Body">
                Body: { post.body }
            </div>
            <div className="Post__ShowCommentsButton">
                <a href="#" onClick={() => {
                    dispatch(getComments(post.id));
                }}>Show Comments</a>
            </div>
        </div>
    );
};

export default Post;