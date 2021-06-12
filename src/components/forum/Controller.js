import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import { Button } from '@material-ui/core'
import { database } from '../other/links'
import Cookies from 'js-cookie'

export default function Controller() {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    const id = Cookies.get('username')

    const toDB = () => {
        axios.post(database +"/dodaj-posta", {user_id: id, text: post});
    }

    useEffect(() => {
        axios.get(database + "/user/" + id)
        .then(res => {
            setName(res.data);
        })
    })

    return (
        <div id='control' >
            nazwa użytkownika: {name}<br/>
            <TextField id="outlined-basic" label="postuj" variant="standard" onChange={event => setPost(event.target.value)} value={post} /><br />
            <Button onClick={toDB}>wyślij</Button>
            <Link to="/zmiana"><Button>zmień hasło</Button></Link>
        </div>
    )
}
