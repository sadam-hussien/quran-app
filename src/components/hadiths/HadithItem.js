import React, { useEffect, useState } from 'react';

// import {IconClose} from "../svg";

import "./HadithItem.scss";

const HadithItem = ({hadith, index}) => {

    const [active, setActive] = useState(false);

    useEffect( () => {

        index === 0 && setActive(true);

    }, [index]);

    const handleActive = () => {
        setActive(!active);
    }

    return (
        <li className={`hadith-item ${active ?  "active" : ""}`} onClick={handleActive}>
            <div className="hadith-item-content">
                <p className="hadith-item-content-inner">{hadith.arab}</p>
            </div>
            {
                active && (
                    <div className="selected-hadith d-flex align-items-center">
                        <div className="container-fluid">
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-8">
                                    <div className="hadith-item">
                                        <p className="hadith-item-content-inner">{hadith.arab}</p>
                                        {/* <button onClick={handleActive} type="button" className="close-btn">
                                            <IconClose style={{width: "1.2rem", height: "auto"}} />
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                )
            }

        </li>
    );

}

export default HadithItem;