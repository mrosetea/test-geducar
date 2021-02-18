import React, {Fragment} from 'react';
import './style.scss';
import {FaTimes} from "react-icons/all";
import {useDispatch, useSelector} from "react-redux";
import {setCommentsAreShown} from "actions/comment.actions";
import {selectComments} from "../../selectors/comment.selector";

const CommentsModal = () => {

    const dispatch = useDispatch();
    const comments = useSelector(selectComments);

    const clickInExitButton = () => {
        dispatch(setCommentsAreShown(false));
    };

    return (
        <>
            <div className="CommentModal__Background"/>
            <div className="CommentModal">
                <div className="CommentModal__Content">
                    <div className="CommentModal__Content__ExitButton" onClick={clickInExitButton}>
                        <FaTimes color="white" size="40px"/>
                    </div>
                    <div className="CommentModal__Content__Title">
                        Comments
                    </div>
                    <div className="CommentModal__Content__Comments">
                        {
                            comments.map((c, i) => (
                                <div className="CommentModal__Content__Comments__Comment">
                                    <div className="CommentModal__Content__Comments__Comment__Name">Name: { c.name }</div>
                                    <div className="CommentModal__Content__Comments__Comment__Body">Body: { c.body }</div>
                                    <div className="CommentModal__Content__Comments__Comment__Email">Email: { c.email }</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default CommentsModal;