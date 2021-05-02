import React, { Fragment } from "react";

import {AudioItem} from "../../global";

import "./Surah.scss";

const Surah = ({surah}) => {

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
                                    <AudioItem 
                                        key={item.id}
                                        index={index}
                                        surahData={item}
                                        name={surah.name}
                                        rewaya={surah.rewaya}
                                        uid={surah.id} />
                                ))
                            }
                        </div>
                    </div>

                </Fragment>
            )}
        </section>
    )

}

export default Surah;