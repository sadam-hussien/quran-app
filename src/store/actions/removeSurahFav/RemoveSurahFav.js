import {REMOVE_SURAH_FAV} from "../../types";

const RemoveSurahFav = (item) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_SURAH_FAV,
            payload: item
        })
    }
}

export default RemoveSurahFav;