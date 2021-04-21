import {REMOVE_FOLLOWER} from "../../types";

const RemoveFollower = (item) => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_FOLLOWER,
            payload: item
        })
    }
}

export default RemoveFollower;