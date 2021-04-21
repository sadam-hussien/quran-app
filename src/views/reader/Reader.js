import React, { Fragment, useEffect, useState } from "react";

import {useParams} from "react-router-dom";

import axios from "axios";

import TopReader from "../../components/reader/topReaders/TopReader";

import Surah from "../../components/reader/surah/Surah";

import { Loader } from "../../components/global";

const Reader = () => {

    let {id} = useParams();

    const [reader, setReader] = useState(null);

    // fetch the surah data
    useEffect( () => {

        axios.get(`https://qurani-api.herokuapp.com/api/reciters/${id}`)
            .then( response => {
                setReader(response.data);
            });

    }, [id])

    return (
        <section className="reader-page page">
            {
                reader !== null ? (
                    <Fragment>
                        <TopReader />
                        <Surah surah={reader} />
                    </Fragment>
                ) : <Loader />
            }
        </section>
    )

}

export default Reader;