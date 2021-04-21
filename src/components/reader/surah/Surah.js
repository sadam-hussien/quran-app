import React, { Fragment, useEffect, useState } from "react";

import AudioList from "./audioList/AudioList";

import AudioPlayer from 'react-h5-audio-player';

import 'react-h5-audio-player/src/styles.scss';

import "./Surah.scss";

const Surah = ({surah}) => {

    const [media, setMedia] = useState(null);

    useEffect( () => {

        surah !== null && setMedia(surah.surasData[0].url);

    }, [surah])

    const changeMedia = (src) => {
        setMedia(src);
    }

    return (
        <section className="surahs">            
            {surah !== null && (
                <Fragment>

                    {/* start title  */}
                    <div className="title">
                        <h5 className="title-text">{surah.name + " - " + surah.rewaya}</h5>
                    </div>

                    {/* start audio list  */}
                    <div className="audio-list">
                        <div className="row">
                            {
                                surah.surasData.map((item, index) => (
                                    <AudioList 
                                        key={item.id}
                                        surahData={item}
                                        name={surah.name}
                                        rewaya={surah.rewaya}
                                        uid={surah.id}
                                        changeMedia={changeMedia}
                                        active={index === 0 ? "active" : ""} />
                                ))
                            }
                        </div>
                    </div>

                    {/* start audio-player  */}
                    <div className="audio-player">
                        <AudioPlayer
                            src={media}
                            autoPlay={false}
                        />
                    </div>

                </Fragment>
            )}
        </section>
    )

}

export default Surah;