import React from "react";

import {IconLogo} from "../../../svg";

import {Colors} from "../../../../constants";

const Logo = () => {

    const logoImgStyle = {fill: Colors.whiteColor, width: "1.8rem", height: "1.8rem"};

    return (
        <div className="logo d-flex align-items-center">
            <span className="logo-img d-flex align-items-center justify-content-center">
                <IconLogo style={logoImgStyle}/>
            </span>
            <h3 className="logo-text">قرءان</h3>
        </div>
    )

}

export default Logo;