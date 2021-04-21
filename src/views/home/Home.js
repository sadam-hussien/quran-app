import React, { useState } from "react";

import Filters from "../../components/home/filters/Filters";

import NamesOfReaders from "../../components/home/namesOfReaders/NamesOfReaders";

import "./Home.scss";

const Home = () => {

    const [search, setSearch] = useState("");
    
    const [selected, setSelected] = useState("");

    const [layout, setLayout] = useState("horizontal");

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

export default Home;