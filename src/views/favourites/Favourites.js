import React, { useEffect } from 'react';

import {connect} from "react-redux";

import {HandleMedia, ChangeMedia} from "../../store/actions";

import ReadersFav from "../../components/favourites/readerFav/ReadersFav";

import SurahsFav from "../../components/favourites/surahsFav/SurahsFav";

import "./Favourites.scss";

const Favourites = ({surahsFavourites, HandleMedia, ChangeMedia}) => {

    useEffect(() => {

        if (surahsFavourites.length > 0) {
            ChangeMedia(0);

            // handle media
            let mediaHandler = surahsFavourites.map(item => {
                return {
                    ...item.surahData,
                    id: item.id + item.surahData.id
                }
            })
            
            HandleMedia(mediaHandler);

        }

    }, [HandleMedia, surahsFavourites, ChangeMedia]);

    return (
        <section className="favourites-page page">
            <ReadersFav />
            <SurahsFav />
        </section>
    );

}

const mapStateToProps = (state) => {
    return {
        surahsFavourites: state.surahsFavourites,
    }
}

export default connect(mapStateToProps, {HandleMedia, ChangeMedia})(Favourites);