import React from "react";

import {IconLogo, IconListen, IconBook} from "../../svg";

import {Colors} from "../../../constants";

import "./Aside.scss";

const Aside = () => {

    const headIconStyles = {
        maxWidth: "90%",
        height: "auto",
        fill: Colors.whiteColor
    }

    const bodyIconStyles = {
        width: "4rem",
        height: "4rem",
        fill: Colors.textColor,
        opacity: .2,
    }

    return (
        <aside className="padding-vertical">

            {/* start head-area  */}
            <div className="head-area">
                <div className="row align-items-center">
                    <div className="col-4">
                        <h5 className="text">القرآن</h5>
                        <h3 className="text">الكريم</h3>
                    </div>
                    <div className="col-8">
                        <div className="icon d-flex justify-content-end">
                            <IconLogo style={headIconStyles} />
                        </div>
                    </div>
                </div>
            </div>

            {/* start body-area  */}
            <div className="body-area">
                <div className="global-info d-flex flex-column flex-md-row flex-lg-column justify-content-between justify-content-lg-stretch">

                    {/* start box-info  */}
                    <div className="box-info position-relative flex-fill">
                        <h6 className="box-info-title">اخر قراءة</h6>
                        <h5 className="box-info-response">لا يوجد</h5>
                        <div className="box-info-icon position-absolute">
                            <IconBook style={bodyIconStyles} />
                        </div>
                    </div>

                    {/* start box-info  */}
                    <div className="box-info position-relative flex-fill">
                        <h6 className="box-info-title">اخر ما استمعت</h6>
                        <h5 className="box-info-response">لا يوجد</h5>
                        <div className="box-info-icon position-absolute">
                            <IconListen style={bodyIconStyles} />
                        </div>
                    </div>

                </div>
            </div>

        </aside>
    )

}

export default Aside;