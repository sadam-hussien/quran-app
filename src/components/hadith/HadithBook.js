import React from 'react';

import {Link} from "react-router-dom";

import {IconBook} from "../svg";

import {Colors} from "../../constants";

import "./HadithBook.scss";

const HadithBook = ({book, index}) => {

    return (
        <div className="col-4">
            <div className="hidith-book d-flex align-items-center">
                <Link to={`/hadith/${book.id}`}>
                    <div className="info">
                        <h6 className="name">
                            {
                                book.id === "abu-daud" 
                                    ? "سنن ابو داوود"
                                    : book.id === "ahmad"
                                        ? "سنن احمد"
                                    : book.id === "bukhari"
                                        ? "سنن البخارى"
                                    : book.id === "darimi"
                                        ? "سنن الدارمى"
                                    : book.id === "ibnu-majah"
                                        ? "سنن ابن ماجه"
                                    : book.id === "muslim"
                                        ? "سنن مسلم"
                                    : book.id === "nasai" 
                                        ? "سنن النسائى"
                                    : book.id === "tirmidzi"
                                        ? "سنن الترمذى"
                                    : book.id === "malik"
                                        ? "سنن مالك"
                                    : ""
                            }
                        </h6>
                        <div className="available d-flex align-items-center">
                            <h6 className="av-text">الاحاديث المتاحه:</h6>
                            <span className="av-num">{book.available}</span>
                        </div>
                    </div>

                    <IconBook style={{width: "1.2rem", height: "auto", fill: Colors.textColor, opacity: .7}}/>
                    <span className="index">{index + 1}</span>
                </Link>
            </div>
        </div>
    );

}

export default HadithBook;