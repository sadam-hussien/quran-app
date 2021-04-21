import React, { useEffect, useState } from "react";

import {Link} from "react-router-dom";

import {connect} from "react-redux";

import {RemoveReaderFav, AddReaderFav} from "../../../store/actions";

import {FavouriteBtn, Loader} from "../../global";

import "./NamesOfReaders.scss";

const NamesOfReaders = ({namesOfReaders, RemoveReaderFav, AddReaderFav, search, selected, layout}) => {

    const [readers, setReaders] = useState([]);

    useEffect( () => {

        let fillterReaders = namesOfReaders.filter(item => item.name.includes(search) && item.rewaya.includes(selected));

        setReaders(fillterReaders);

    }, [search, namesOfReaders, selected]);
    
    return (
        <section className="names-of-readers">
            <div className="row">
                {
                    readers.length > 0 ? readers.map((item, index) => {
                        return (
                            <div className={`${layout === "horizontal" ? "col-sm-6 col-md-4" : "col-12"}`} key={item.id}>
                                <div className="item">
                                    <div className="top-area d-flex align-items-center justify-content-between">
                                        <FavouriteBtn item={item} favAdd={AddReaderFav} favRemove={RemoveReaderFav}/>
                                        <span className="box-num">{index + 1}</span>
                                    </div>
                                    <Link to={`/${item.id}`}>
                                        <h6 className="box-name">{item.name}</h6>
                                        <h6 className="box-rewaya">{item.rewaya}</h6>
                                    </Link>
                                </div>
                            </div>
                        )
                    }) : <Loader />
                }
            </div>
        </section>
    )

}

const mapStateToProps = (state) => {
    return {
        namesOfReaders: state.namesOfReaders
    }
}

export default connect(mapStateToProps, {RemoveReaderFav, AddReaderFav})(NamesOfReaders);