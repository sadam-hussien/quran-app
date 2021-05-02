import {LOAD_READERS} from "../../types";

import axios from "axios";

const loadReaders = () => {
    const U_R_L = "https://qurani-api.herokuapp.com/api/reciters";
    return (dispatch) => {
        axios.get(U_R_L).then(response => {
            dispatch({
                type: LOAD_READERS,
                payload: response.data
            })
        }).catch(error => console.log(error, "from here"))
    }
}

export default loadReaders;