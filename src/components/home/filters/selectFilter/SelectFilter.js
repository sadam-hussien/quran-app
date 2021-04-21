import React, {useEffect, useState} from "react";

import {connect} from "react-redux";

import Select from "react-select";

const SelectFilter = ({handleSelected, readers}) => {

    const [selectedOption, setSelectedOption] = useState(null);

    const [options, setOptions] = useState([]);

    useEffect( () => {

        let optionsName = readers !== null && [...new Set(readers.map((item => item.rewaya)))];

        let finalOptionsName = optionsName.map(item => {
            return {
                label: item,
                value: item
            }
        });

        finalOptionsName.unshift({
            label: "الكل",
            value: ""
        })

        setOptions(finalOptionsName);

    }, [readers]);

    useEffect( () => {

        selectedOption !== null && handleSelected(selectedOption.value);

    }, [selectedOption, handleSelected]);

    return (
        <div className="select-filter">
            <Select 
                className="select-wrapper"
                classNamePrefix="select-item"
                defaultValue={selectedOption}
                options={options}
                onChange={setSelectedOption}
                placeholder="اختر الرواية / نوع المصحف" />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        readers: state.namesOfReaders
    }
}

export default connect(mapStateToProps)(SelectFilter);