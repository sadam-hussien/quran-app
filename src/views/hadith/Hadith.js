import React, { useEffect } from 'react';

import {connect} from "react-redux";

import {LoadHadith} from "../../store/actions";

import {Loader} from "../../components/global";

import HadithBook from "../../components/hadith/HadithBook";

import "./Hadith.scss";

const Hadith = ({hadithBooks, LoadHadith}) => {

    useEffect( () => {

        if (hadithBooks.length === 0) {
            LoadHadith();
        }

    }, [hadithBooks, LoadHadith]);

    return (
        <section className="hadith-page page">

            {/* start title  */}
            <div className="title">
                <h4 className="title-text">الكتب المتاحه</h4>
            </div>

            <div className="hadith-books">
                <div className="row">
                    {
                        hadithBooks.length > 0 
                        ? 
                            (hadithBooks.map((book, index) => (
                                <HadithBook 
                                    key={index}
                                    index={index}
                                    book={book} />
                            ))) 
                        : (<Loader />)
                    }
                </div>

            </div>

        </section>
    );

}

const mapStateToProps = (state) => {
    return {
        hadithBooks: state.hadithBooks
    }
}

export default connect(mapStateToProps, {LoadHadith})(Hadith);