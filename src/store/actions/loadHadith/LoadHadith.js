import {LOAD_HADITH} from "../../types";

import axios from "axios";

const LoadHadith = () => {
    return (dispatch) => {
        const HadithUrl = "https://api.hadith.sutanlab.id/books";
        axios.get(HadithUrl).then(response => {
            dispatch({
                type: LOAD_HADITH,
                payload: response.data.data
            })
        }).catch(err => console.log("err from hadith" + err));
    }
}

export default LoadHadith;