import React from 'react';

import {Link} from "react-router-dom";

import {connect} from "react-redux";

import {IconClose} from "../../svg";

import { Colors } from '../../../constants';

const ReadersFav = ({readersFav}) => {

    return (
        <section className="readers-fav fav-box">

            {/* start title  */}
            <div className="title">
                <h4 className="title-text m-0">المفضله من القراء</h4>
            </div>

            <div className="items">
                <div className="row">
                    {
                        readersFav.length > 0 ? readersFav.map((reader, index) => (
                            <div className="col-sm-6 col-lg-4" key={index}>
                                <div className="item d-flex align-items-center justify-content-between">

                                    <Link to={`/${reader.id}`}>
                                        <h6 className="box-name">{reader.name}</h6>
                                        <h6 className="box-rewaya">{reader.rewaya}</h6>
                                    </Link>

                                    <button type="button" className="icon-wrapper d-flex align-items-center justify-content-center">
                                        <IconClose style={{width: "1.3rem", height: "auto", fill: Colors.mainColor}} />
                                    </button>

                                </div>
                            </div>
                        )) : (<div className="col-12">
                            <p className="its-empty">لا يوجد</p>
                        </div>)
                    }
                </div>
            </div>

        </section>
    );

}

const mapStateToProps = (state) => {
    return {
        readersFav: state.readersFavourites
    }
}

export default connect(mapStateToProps)(ReadersFav);
