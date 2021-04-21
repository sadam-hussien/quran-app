import React from "react";

import {connect} from "react-redux";

import SwiperCore, { Navigation } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import FollowBtn from "./FollowBtn";

import {IconAvatar, IconMicrophone, IconListen, IconLike} from "../../svg";

import { Colors } from "../../../constants";

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';

import "./TopReader.scss";

SwiperCore.use([Navigation]);

const TopReader = ({readers}) => {

    const responsive = {
        640: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 20,
        }
    }

    const startReader = readers.length > 0 && Math.ceil(Math.random() * (readers.length - 10));

    const iconStyles = {
        width: "1.1rem",
        height: "auto",
        fill: Colors.mainColor
    }

    return (
        <section className="top-readers">
            
            {/* start title  */}
            <div className="title">
                <h4 className="title-text">افضل القراء</h4>
            </div>

            <div className="readers-slides">
                {
                    readers.length > 0 ? (

                        <Swiper
                            dir="rtl"
                            breakpoints={responsive}
                            navigation
                            onSlideChange={() => console.log('slide change')}>
                            {
                                readers.slice(startReader, startReader + 10).map(item => (
                                    <SwiperSlide key={item.id}>
                                        <div className="box">
 
                                            <div className="img">
                                                <IconAvatar style={{width: "1.4rem", height: "auto", fill: Colors.mainColor}} />
                                            </div>

                                            <div className="details">
                                                <h6 className="name">{item.name}</h6>
                                                <div className="stats d-flex justify-content-between">

                                                    <div className="stats-box d-flex align-items-center">
                                                        <IconMicrophone style={iconStyles} />
                                                        <div className="stats-box-inner">
                                                            <b>{item.count}</b>
                                                            <span>تسجيل</span>
                                                        </div>
                                                    </div>

                                                    <div className="stats-box d-flex align-items-center">
                                                        <IconListen style={iconStyles} />
                                                        <div>
                                                            <b>{Math.ceil(Math.random() * 10000)}</b>
                                                            <span>المستمعين</span>
                                                        </div>
                                                    </div>

                                                    <div className="stats-box d-flex align-items-center">
                                                        <IconLike style={iconStyles} />
                                                        <div>
                                                            <b>{Math.ceil(Math.random() * 10000)}</b>
                                                            <span>الاعجابات</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <FollowBtn id={item.id} name={item.name} reway={item.rewaya} count={item.count} />
                                    
                                        </div>
                                    </SwiperSlide>
                                ))
                            }

                        </Swiper>

                    ) : null
                }
            </div>

        </section>
    )

}

const mapStateToProps = (state) => {
    return {
        readers: state.namesOfReaders
    }
}

export default connect(mapStateToProps)(TopReader);