import React from 'react';
import "./searchBox.css"

const SearchBox = ({searchfield, searchChange }) => {

        return (
            <div className="search-box">
                <input
                    type="search"
                    placeholder="search"
                    onChange={searchChange}
                />
            </div>
        )
};

export default SearchBox;

