import {createStore, compose, applyMiddleware} from "redux";

import thunk from "redux-thunk";

import AppReducer from "./reducers";

const initState = {
    theme: "light",
    lang: "ar",
    namesOfReaders: [],
    surahsFavourites: [],
    readersFavourites: [],
    followers: [],
}

const Store = createStore(AppReducer, initState, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default Store;