import React from "react";

import {IconSearch} from "../../../svg";

import {Colors} from "../../../../constants";

const Search = () => {

    const iconStyles = {
        fill: Colors.textSubColor,
        width: "1.4rem",
        height: "1.4rem"
    }

    return (
        <div className="search d-none d-lg-block">
            <form>
                <div className="search-inp-wrap position-relative d-flex align-items-center">
                    <label htmlFor="search-inp">
                        <IconSearch style={iconStyles} />
                    </label>
                    <input className="form-control" type="text" placeholder="ابحث" id="search-inp" />
                </div>
            </form>
        </div>
    )

}

export default Search;