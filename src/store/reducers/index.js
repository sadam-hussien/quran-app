import {LOAD_READERS, ADD_SURAH_FAV, REMOVE_SURAH_FAV, ADD_READER_FAV, REMOVE_READER_FAV, ADD_FOLLOWER, REMOVE_FOLLOWER} from "../types";

const AppReducer = (state, action) => {

    switch (action.type) {

        // start load
        case LOAD_READERS:
            return {
                ...state,
                namesOfReaders: action.payload
            }
        // *******

        // start add surah to fav
        case ADD_SURAH_FAV:
            return {
                ...state,
                surahsFavourites: [...state.surahsFavourites, action.payload]
            }
        // *******

        // start remove surah from fav
        case REMOVE_SURAH_FAV:
            const surahsFavourites = state.surahsFavourites.filter(item => item.id !== action.payload);
            return {
                ...state,
                surahsFavourites
            }
        // (*******)

        // start add reader to fav
        case ADD_READER_FAV:
            return {
                ...state,
                readersFavourites: [...state.readersFavourites, action.payload]
            }
        // **********

        // start remove reader from fav
        case REMOVE_READER_FAV:
            const readersFavourites = state.readersFavourites.filter(item => item.id !== action.payload);
            return {
                ...state,
                readersFavourites
            }
        // ************

        // start add follower
        case ADD_FOLLOWER:
            return {
                ...state,
                followers: [...state.followers, action.payload]
            }
        // *******

        // start remove follower 
        case REMOVE_FOLLOWER:
            const followers = state.followers.filter(item => item.id !== action.payload);
            return {
                ...state,
                followers
            }

        // ************

        default:
            return state;
    }

}

export default AppReducer;