import {ADD_SURAH_FAV} from "../../types";

const AddSurahFav = (item) => {
    return (dispatch) => {
        dispatch({
            type: ADD_SURAH_FAV,
            payload: item
        })
    }
}

export default AddSurahFav;