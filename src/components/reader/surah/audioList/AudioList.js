import React, { useRef } from "react";

import {connect} from "react-redux";

import {AddSurahFav, RemoveSurahFav} from "../../../../store/actions";

import {IconShare, IconPlay} from "../../../svg";

import {Colors} from "../../../../constants";

import {FavouriteBtn} from "../../../global";

const AudioList = ({surahData, uid, name, rewaya, changeMedia, active, AddSurahFav, RemoveSurahFav}) => {

    const btnRef = useRef();

    // id
    const id = parseInt(surahData.id) < 10
                    ? "00" + surahData.id 
                : parseInt(surahData.id) > 9 && parseInt(surahData.id) < 100
                    ? "0" + surahData.id
                : surahData.id;
                
    const styles = {width: "1.4rem", height: "auto", fill: Colors.textColor, marginRight: "10px"}

    const handleMedia = () => {
        const audioList = btnRef.current.closest(".audio-list");

        const activeAudioItem = audioList.querySelectorAll(".audio-item.active")[0];

        // remove active
        activeAudioItem.classList.remove("active");

        // add active on current player
        btnRef.current.closest(".audio-item").classList.add("active");

        // send the src to player
        changeMedia(surahData.url);
    }

    return (
        <div className="col-md-6">
            <div className={`audio-item d-flex align-items-center justify-content-between ${active}`}>
                <div className="right d-flex align-items-center">
                    <button type="button" className="play-btn" onClick={handleMedia} ref={btnRef}>
                        <IconPlay style={{width: "2.4rem", height: "auto", fill: Colors.mainColor}} />
                    </button>
                    <span className="id">{id}</span>
                    <h6 className="name">{surahData.name}</h6>
                </div>
                <div className="left d-flex align-items-center">
                    <button type="button" className="options-btn">
                        <IconShare style={styles} />
                    </button>
                    <FavouriteBtn item={{
                        id: uid + surahData.id,
                        readerId: uid,
                        name: name,
                        rewaya: rewaya,
                        surahData
                    }} favAdd={AddSurahFav} favRemove={RemoveSurahFav}/>
                </div>
            </div>
        </div>
    )

}

export default connect(null, {AddSurahFav, RemoveSurahFav})(AudioList);