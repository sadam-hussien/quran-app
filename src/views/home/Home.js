import React, { useState, useEffect } from "react";

import {connect} from "react-redux";

import {loadReaders} from "../../store/actions";

import Filters from "../../components/home/filters/Filters";

import NamesOfReaders from "../../components/home/namesOfReaders/NamesOfReaders";

import "./Home.scss";

const Home = ({namesOfReaders, loadReaders}) => {

    const [search, setSearch] = useState("");
    
    const [selected, setSelected] = useState("");

    const [layout, setLayout] = useState("horizontal");

    // load readers
    useEffect( () => {

        if (namesOfReaders.length === 0) {
            loadReaders();
        }

    }, [loadReaders, namesOfReaders]);

    const handleChange = (value) => {
        setSearch(value);
    }

    const handleSelected = (value) => {
        setSelected(value);
    }

    const handleLayout = (value) => {
        setLayout(value);
    }

    return (
        <section className="home-page page">
            <Filters handleChange={handleChange} handleSelected={handleSelected} handleLayout={handleLayout} layout={layout} />
            <NamesOfReaders search={search} selected={selected} layout={layout} />
        </section>
    )

}

const mapStateToProps = (state) => {
    return {
        namesOfReaders: state.namesOfReaders
    }
}

export default connect(mapStateToProps, {loadReaders})(Home);