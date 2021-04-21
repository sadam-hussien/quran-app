import {ADD_FOLLOWER} from "../../types";

const AddFollower = (item) => {
    return (dispatch) => {
        dispatch({
            type: ADD_FOLLOWER,
            payload: item
        })
    }
}

export default AddFollower;