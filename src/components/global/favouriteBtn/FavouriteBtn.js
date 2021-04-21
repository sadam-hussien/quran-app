import React, {useState} from "react";

import {IconHeart} from "../../svg";

import {Colors} from "../../../constants";

const FavouriteBtn = ({item, favAdd, favRemove}) => {

    const [favourite, setFavourite] = useState(false);

    const styles = {width: "1.9rem", height: "auto", fill: Colors.textColor, marginRight: "10px"}

    const handleFavourite = () => {

        // remove from favourite
        if (favourite) {
            setFavourite(!favourite);
            favRemove(item.id);

        // add to favourite
        } else {
            setFavourite(!favourite);
            favAdd(item);
        }

    }

    return (
        <button type="button" className={`options-btn add-to-favourite ${favourite ? "fav-in" : ""}`} onClick={handleFavourite}>
            <IconHeart 
                style={styles}
                fill={favourite ? Colors.whiteColor : "none"}
                borderColor={favourite ? Colors.mainColor : Colors.textColor}
                subBorderColor={favourite ? Colors.mainColor : Colors.textColor} />
        </button>
    )
}

export default FavouriteBtn;