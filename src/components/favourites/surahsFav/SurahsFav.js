import React from 'react';

import {connect} from "react-redux";

import {AudioItem} from "../../global";

const SurahsFav = ({surahsFav}) => {

    return (
        <section className="surah-fav fav-box">

            {/* start title  */}
            <div className="title">
                <h4 className="title-text">المفضله من السور</h4>
            </div>

            <div className="items">
                <div className="row">
                    {
                        surahsFav.length > 0 ? surahsFav.map((surah, index) => (
                            <AudioItem 
                                key={index}
                                index={index}
                                surahData={surah.surahData}
                                name={surah.surahData.name}
                                rewaya={surah.rewaya}
                                uid={surah.surahData.id} />
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
        surahsFav: state.surahsFavourites
    }
}

export default connect(mapStateToProps)(SurahsFav);
