import React from "react";

import  SearchFilter from "./searchFilter/SearchFilter";

import  SelectFilter from "./selectFilter/SelectFilter";

import {IconHorizontalLayout, IconVerticalLayout} from "../../svg";

import {Colors} from "../../../constants";

import "./Filters.scss";

const Filters = ({handleChange, handleSelected, handleLayout, layout}) => {

    const hStyles = {
        width: "1.9rem",
        height: "auto",
        fill: Colors.textColor,
    }
    const vStyles = {
        width: "2rem",
        height: "auto",
        fill: Colors.textColor,
    }

    return (
        <section className="filter-section">
            <div className="row align-items-center">
                <div className="col-8 col-sm-10 col-md-5">
                    <SearchFilter handleChange={handleChange} />                        
                </div>
                <div className="col-md-5 order-2 order-md-1">
                    <SelectFilter handleSelected={handleSelected} />
                </div>
                <div className="col-4 col-sm-2 order-1 order-md-2 col-md-2 d-flex justify-content-end">
                    <div className="change-layout">
                        <button type="button" className={layout === "vertical" ? "active" : ""} onClick={() => handleLayout("vertical")}>
                            <IconVerticalLayout style={vStyles} />
                        </button>

                        <button type="button" className={layout === "horizontal" ? "active" : ""} onClick={() => handleLayout("horizontal")}>
                            <IconHorizontalLayout style={hStyles} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Filters;