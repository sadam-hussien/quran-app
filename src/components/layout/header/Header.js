import React, {useEffect} from "react";

import Logo from "./logo/Logo";

import Search from "./search/Search";

import Navbar from "./navbar/Navbar";

import {IconHorizontalLayout} from "../../svg";

import {Colors} from "../../../constants";

import "./Header.scss";

const Header = () => {

    useEffect(() => {

        window.addEventListener("scroll", () => {

            if (window.pageYOffset > 50) {
                document.querySelector(".main-header").classList.add("active");
            } else {
                document.querySelector(".main-header").classList.remove("active");
            }

        });
        
    }, []);

    const toggleNav = () => {
        document.querySelector(".main-header .navbar").classList.toggle("active");
    }

    return (
        <header className="main-header d-flex align-items-center fixed-top">
            <div className="container-fluid">
                <div className="content d-flex align-items-center justify-content-between">

                    {/* start logo  */}
                    <Logo />

                    {/* start search  */}
                    <Navbar />

                    {/* navbar  */}
                    <Search />

                    {/* start toggle-nav  */}
                    <button type="button" className="toggle-nav d-md-none" onClick={toggleNav}>
                        <IconHorizontalLayout style={{fill: Colors.textColor}} />
                    </button>

                </div>
            </div>
        </header>
    )

}

export default Header;