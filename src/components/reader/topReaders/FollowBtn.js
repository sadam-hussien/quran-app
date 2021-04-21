import React, {useState} from "react";

import {connect} from "react-redux";

import {AddFollower, RemoveFollower} from "../../../store/actions";

import {IconCheck} from "../../svg";

import { Colors } from "../../../constants";

const FollowBtn = ({AddFollower, RemoveFollower, name, id, count, rewaya}) => {

    const [follow, setFollow] = useState(false);

    // handle followers
    const handleFollowers = () => {

        // if follow
        if (follow) {
            setFollow(!follow);
            RemoveFollower(id);
        // true (add)
        } else {
            setFollow(!follow);
            const item = {
                id,
                count,
                name,
                rewaya
            }
            AddFollower(item);
        }
    }

    return (
        <button 
            type="button" 
            onClick={handleFollowers}
            className={`follow-btn ${follow ? "following" : "follow" }`}>
            {follow ? (
                <span>
                    <span>متابع</span>
                    <IconCheck style={{
                        width: "1.1rem",
                        height: "auto",
                        fill: Colors.mainColor
                    }} />
                </span>
            ) : (
                <span>
                    <span>تابع</span>
                </span>
            )}
        </button>
    )

}

export default connect(null, {AddFollower, RemoveFollower})(FollowBtn);