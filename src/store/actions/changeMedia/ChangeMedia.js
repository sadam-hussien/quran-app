import {CHANGE_MEDIA} from "../../types";

const ChangeMedia = (index) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_MEDIA,
            payload: index
        })
    }
}

export default ChangeMedia;