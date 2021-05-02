import React from "react";

import {connect} from "react-redux";

import {AddSurahFav, RemoveSurahFav, ChangeMedia} from "../../../store/actions";

import {IconShare, IconPlay, IconPause} from "../../svg";

import {Colors} from "../../../constants";

import {FavouriteBtn} from "../../global";

import "./AudioItem.scss";

const AudioItem = ({surahData, index, uid, name, rewaya, ChangeMedia, AddSurahFav, RemoveSurahFav, mediaPlaying}) => {

    // id
    const id = parseInt(surahData.id) < 10
                    ? "00" + surahData.id 
                : parseInt(surahData.id) > 9 && parseInt(surahData.id) < 100
                    ? "0" + surahData.id
                : surahData.id;

    const playingStyles = {width: "2.4rem", height: "auto", fill: Colors.mainColor}
                
    const styles = {width: "1.4rem", height: "auto", fill: Colors.textColor, marginRight: "10px"}

    const handleMedia = () => {
        ChangeMedia(index);
    }

    return (
        <div className="col-md-6">
            <div className={`audio-item d-flex align-items-center justify-content-between ${mediaPlaying === index ? "active" : ""}`}>

                {/* start right  */}
                <div className="right d-flex align-items-center">

                    {/* {start play btn } */}
                    <button type="button" className="play-btn" onClick={handleMedia}>
                        {
                            mediaPlaying === index ?
                                (<IconPause style={{...playingStyles, width: "1.6rem", paddingRight: "4px"}} />) : 
                                (<IconPlay style={playingStyles} />)
                        }
                    </button>

                    {/* id  */}
                    <span className="id">{id}</span>

                    {/* name  */}
                    <h6 className="name">{surahData.name}</h6>

                </div>
                
                {/* start left  */}
                <div className="left d-flex align-items-center">

                    {/* start options  */}
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

const mapStateToProps = (state) => {
    return {
        mediaPlaying: state.mediaPlaying
    }
}

export default connect(mapStateToProps, {AddSurahFav, RemoveSurahFav, ChangeMedia})(AudioItem);