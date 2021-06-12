import axios from 'axios';
import React, {lazy, useEffect, useState} from 'react'
import { Redirect } from 'react-router-dom';
import { database } from './other/links';

const Main = lazy(() => import('./forum/Main'))
const Controller = lazy(() => import('./forum/Controller'))

const data = window.location.href.split('/')[4];

export default function Forum() {

    useEffect(() => {
        axios.get(database+"/access")
            .then(res => {
                //stuff
            })
    }, [])
    return (
        <div>
            {document.cookie.search("username") !== -1 ? null : <Redirect to="/logowanie"/>}
            <Controller/>
            <Main/>
        </div>
    )
}
