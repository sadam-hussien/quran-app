import {createStore, applyMiddleware, compose} from "redux";

import thunk from "redux-thunk";

import AppReducer from "./reducers";

const initState = {
    theme: "light",
    lang: "ar",
    namesOfReaders: [],
    hadithBooks: [],
    surahsFavourites: [],
    readersFavourites: [],
    followers: [],
    media: [],
    mediaPlaying: 0,
}

const devTools = process.env.NODE_ENV === 'development' ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : (a) => a;

const Store = createStore(AppReducer, initState,
    compose(
        applyMiddleware(thunk),
        devTools
    )
);

export default Store;