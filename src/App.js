import React from 'react';
import Home from "containers/Home/Home";
import './App.scss';
import CommentsModal from "./components/CommentsModal";
import {useSelector} from "react-redux";
import {selectCommentsAreShown} from "./selectors/comment.selector";

const App = () => {
    const commentsAreShown = useSelector(selectCommentsAreShown);
    return (
        <div className="App">
            <Home />
            { commentsAreShown && <CommentsModal /> }
        </div>
    );
}

export default App;