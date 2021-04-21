import {ADD_READER_FAV} from "../../types";

const AddReaderFav = (item) => {
    return (dispatch) => {
        dispatch({
            type: ADD_READER_FAV,
            payload: item
        })
    }
}

export default AddReaderFav;