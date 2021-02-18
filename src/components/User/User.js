import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { selectUserSelected} from "selectors/user.selector";
import {setUserSelected} from "actions/user.actions";
import {FaAngleRight} from "react-icons/fa";

import './style.scss';
import {getPosts} from "../../actions/post.actions";

const User = ({ user, index }) => {

    const dispatch = useDispatch();
    const userSelected = useSelector(selectUserSelected);

    const onClick = () => {
        dispatch(setUserSelected(index));
        dispatch(getPosts(user.id));
    };

    const arrowIsShown = () => userSelected === index;

    return (
        <div onClick={onClick} className={`User ${userSelected === index ? 'Selected' : ''}`}>
            <div className="User__Section">
                <div className="User__Section__Avatar">
                    <img alt={`user_avatar_${user.id}`} src={`https://i.pravatar.cc/100?r=${user.id}`}/>
                </div>
                <div className="User__Section__Data">
                    <div className="User__Section__Data__Name">
                        { user.name }
                    </div>
                    <div className="User__Section__Data__Website">
                        Website: { user.website }
                    </div>
                </div>
            </div>
            { arrowIsShown() && <FaAngleRight color="#F1F5F8" size="30px"/> }
        </div>
    )
};

export default User