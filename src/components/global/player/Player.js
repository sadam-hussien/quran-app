import React from 'react';

import {connect} from "react-redux";

import AudioPlayer from 'react-h5-audio-player';

import 'react-h5-audio-player/src/styles.scss';

import "./Player.scss";

import {ChangeMedia} from "../../../store/actions";

const Player = ({media, mediaPlaying, ChangeMedia}) => {

    const playerEnded = () => {
        media.length === mediaPlaying + 1 ? ChangeMedia(0) : ChangeMedia(mediaPlaying + 1);
    }

    return (
        <div className="audio-player">
            {
                media.length > 0 && (
                    <AudioPlayer
                        src={media[mediaPlaying].url}
                        autoPlay={true}
                        onEnded={playerEnded}
                    />
                )
            }
        </div>
    );

}

const mapStateToProps = (state) => {
    return {
        media: state.media,
        mediaPlaying: state.mediaPlaying
    }
}

export default connect(mapStateToProps, {ChangeMedia})(Player);