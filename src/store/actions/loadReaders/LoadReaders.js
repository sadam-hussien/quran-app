import {LOAD_READERS} from "../../types";

import axios from "axios";

const loadReaders = () => {
    const U_R_L = "https://qurani-api.herokuapp.com/api/reciters";
    // const U_R_L = "https://mp3quran.net/api/_arabic.json";
    return (dispatch) => {
        axios.get(U_R_L).then(response => {
            dispatch({
                type: LOAD_READERS,
                payload: response.data
            })
        }).catch(error => console.log(error))
    }
}

export default loadReaders;