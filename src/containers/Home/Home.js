import React from 'react';
import UserSection from "components/UserSection";
import PostSection from "components/PostSection";
import './style.scss';
import {useSelector} from "react-redux";
import {selectUserSelected} from "../../selectors/user.selector";
import NoUserSelected from "../../components/NoUserSelected";

const Home = () => {
    const userSelected = useSelector(selectUserSelected);

    return (
        <div className="Home">
            <UserSection />
            { userSelected >= 0 ? <PostSection /> : <NoUserSelected /> }
        </div>
    )
};

export default Home;