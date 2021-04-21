import React from "react";

import {NavLink} from "react-router-dom";

const Navbar = () => {

    return (
        <div className="navbar">
            <nav>
                <ul className="list-unstyled d-flex align-items-center m-0 p-0">
                    <li><NavLink to="/" exact activeClassName="active">الرئيسية</NavLink></li>
                    <li><NavLink to="/tv" activeClassName="active">الاذاعة</NavLink></li>
                    <li><NavLink to="/tu" activeClassName="active">تصفح القرءان</NavLink></li>
                    <li><NavLink to="/tb" activeClassName="active">التلاوات المرئية</NavLink></li>
                    <li><NavLink to="/tc" activeClassName="active">حصن المسلم</NavLink></li>
                    <li><NavLink to="/te" activeClassName="active">المفضلة</NavLink></li>
                </ul>
            </nav>
        </div>
    )

}

export default Navbar;