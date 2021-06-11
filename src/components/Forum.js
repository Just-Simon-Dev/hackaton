import axios from 'axios';
import React, {lazy, useEffect, useState} from 'react'
import { Redirect } from 'react-router-dom';
import { database } from './other/links';

const Main = lazy(() => import('./forum/Main'));
const Account = lazy(() => import('./forum/Account'))

const data = window.location.href.split('/')[4];



export default function Forum() {

    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        for (let i = 0; i < document.cookie.split(';').length; i++){
            if (document.cookie.split(';')[i].split('=')[0] == 'username'){
                setIsLogged(true)
                break
            }
        }
        console.log(isLogged)
        axios.get(database+"/access")
            .then(res => {
                //stuff
            })
    }, [])
    return (
        <div>
            {/* {isLogged ? null : <Redirect to="/logowanie"/>} */}

        </div>
    )
}
