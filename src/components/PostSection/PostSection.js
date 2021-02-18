import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectPosts} from "selectors/post.selector";
import './style.scss';
import {FaTimes} from "react-icons/all";
import {clearUserSelected} from "../../actions/user.actions";
import Post from "components/Post";

const PostSection = () => {
    const posts = useSelector(selectPosts);
    const dispatch = useDispatch();

    const clickInExitButton = () => {
        dispatch(clearUserSelected());
    };

    return (
        <div className="PostSection">
            <div className="PostSection__ExitButtonContainer" onClick={clickInExitButton}>
                <FaTimes color="white" size="40px"/>
            </div>
            <div className="PostSection__Container">
                { posts.map((p, i) => (<Post post={p}/>)) }
            </div>
        </div>
    );
}

export default PostSection;