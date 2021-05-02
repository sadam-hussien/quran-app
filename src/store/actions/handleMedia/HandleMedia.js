import {HANDLE_MEDIA} from "../../types";

const HandleMedia = (media) => {
    return (dispatch) => {
        dispatch({
            type: HANDLE_MEDIA,
            payload: media
        })
    }
}

export default HandleMedia;