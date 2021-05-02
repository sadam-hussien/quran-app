import React, { Fragment, useEffect, useState } from 'react';

import {useParams, Link} from "react-router-dom";

import axios from "axios";

import {Loader} from "../../components/global";

import HadithItem from '../../components/hadiths/HadithItem';

import {IconLeft} from "../../components/svg";

import { Colors } from '../../constants';

import "./Hadiths.scss";

const Hadiths = () => {

    const [hadiths, setHadiths] = useState(null);

    const {id} = useParams();

    // get the hadiths
    useEffect( () => {

        axios.get(`https://api.hadith.sutanlab.id/books/${id}?range=1-50`)
            .then(response => {
                setHadiths(response.data.data);
            })
        
    }, [id])

    return (
        <section className="hadiths-page page">

            {
                hadiths !== null ? (
                    <Fragment>
                        {/* start title  */}
                        <div className="title d-flex align-items-center justify-content-between">
                            <h5 className="title-text">
                                {
                                    hadiths.id === "abu-daud" 
                                        ? "سنن ابو داوود"
                                        : hadiths.id === "ahmad"
                                            ? "سنن احمد"
                                        : hadiths.id === "bukhari"
                                            ? "سنن البخارى"
                                        : hadiths.id === "darimi"
                                            ? "سنن الدارمى"
                                        : hadiths.id === "ibnu-majah"
                                            ? "سنن ابن ماجه"
                                        : hadiths.id === "muslim"
                                            ? "سنن مسلم"
                                        : hadiths.id === "nasai" 
                                            ? "سنن النسائى"
                                        : hadiths.id === "tirmidzi"
                                            ? "سنن الترمذى"
                                        : hadiths.id === "malik"
                                            ? "سنن مالك"
                                        : ""
                                }
                            </h5>
                            <h6 className="av-hadith m-0">عدد الاحاديث المتاحه : <span>{hadiths.available}</span></h6>
                            <Link to="/hadith" className="back-btn d-flex align-items-center justify-content-center"><IconLeft style={{width: "2rem", height: "auto", fill: Colors.mainColor}} /></Link>
                        </div>

                        <ul className="list-unstyled m-0 p-0">
                            {
                                hadiths.hadiths.length > 0 && (
                                    hadiths.hadiths.map((hadith, index) => (
                                        <HadithItem key={index} hadith={hadith} index={index} />
                                    ))
                                )
                            }
                        </ul>
                    </Fragment>
                ) : (<Loader />)
            }

            
        </section>
    );

}

export default Hadiths;