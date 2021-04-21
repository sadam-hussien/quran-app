import React from "react";

const SearchFilter = ({handleChange}) => {

    return (
        <div className="search-filter">
            <input type="text"
                placeholder="بحث باسم القارئ"
                className="form-control"
                onChange={(e) => handleChange(e.target.value)} />
        </div>
    );
}

export default SearchFilter;