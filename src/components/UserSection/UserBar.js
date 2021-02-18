import React, { useEffect } from 'react';
import './style.scss';
import SearchBar from "components/SearchBar";
import User from "components/User";
import {useDispatch, useSelector} from "react-redux";
import {getUsers} from "../../actions/user.actions";
import {selectUsers} from "../../selectors/user.selector";

const UserSection = () => {

    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    useEffect(() => {
        dispatch(getUsers());
    },[dispatch])

    return (
        <div className="UserSection">
            <SearchBar />
            { users.map((u, i) => (<User key={`u_${i}`} user={u} index={i}/>)) }
        </div>
    );
};

export default UserSection;