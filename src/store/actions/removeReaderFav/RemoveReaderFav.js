import {REMOVE_READER_FAV} from "../../types";

const RemoveReaderFav = (item) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_READER_FAV,
            payload: item
        })
    }
}

export default RemoveReaderFav;