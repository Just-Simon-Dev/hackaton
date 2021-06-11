import React, {useState} from 'react'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { database } from '../other/links'

export default function Aktywacja() {
    const code = window.location.href.split('/')[4]

    const send = () => {
        axios.get(database+'/potwierdzenie/'+code);
    }

    return (
        <div>
            <Link to='/logowanie'><Button onClick={send}>Potwierdź</Button></Link>
        </div>
    )
}
