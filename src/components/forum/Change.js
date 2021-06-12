import axios from 'axios'
import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'
import { database } from '../other/links'
import Cookies from 'js-cookie'

export default function Change() {

    const [stareHaslo, setStareHaslo] = useState('')
    const [noweHaslo, setNoweHaslo] = useState('')

    const [res, setRes] = useState(null)

    const id = Cookies.get('username')

    const toDB = () => {
        axios.post(database+"/zmien-haslo", {nowe_haslo: noweHaslo, haslo: stareHaslo, user_id: id})
            .then(res => {
                setRes(res.data);
            })
        
    }

    return (
        <div id='zmiana' >
            <form>
                <TextField id="outlined-basic" label="stare hasło" variant="outlined" onChange={event => setStareHaslo(event.target.value)} value={stareHaslo} /><br /><br />
                <TextField id="outlined-basic" label="nowe hasło" variant="outlined" onChange={event => setNoweHaslo(event.target.value)} value={noweHaslo} /><br /><br />
                <Button onClick={toDB}>wyślij</Button>
                {res === true ? <Redirect to="/forum"/> : null}
            </form>
            {res === false ? "podane stare hasło jest nieprawidłowe" : ""}
        </div>
    )
}
