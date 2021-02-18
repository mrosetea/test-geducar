import React from 'react';
import { FaSearch } from "react-icons/fa";
import './style.scss';

const SearchBar = () => (
    <div className="SearchBar">
        <input placeholder="Search..." className="SearchBar__Input" type="text"/>
        <div className="SearchBar__Icon">
            <FaSearch color="#F1F5F8" size="30px"/>
        </div>
    </div>
);

export default SearchBar;