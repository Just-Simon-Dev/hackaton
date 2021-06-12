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
        if(post != ''){
            axios.post(database +"/dodaj-posta", {user_id: id, text: post})
                .then(res => {
                    window.location.reload()
                });
        }else{
            alert('proszę uzupełnić post')
        }
    }

    useEffect(() => {
        axios.get(database + "/user/" + id)
        .then(res => {
            setName(res.data);
        })
    })

    return (
        <div id='control' >
            <h2>Witaj, {name}</h2>
            <div>
            <TextField id="outlined-basic" label="postuj" variant="standard" onChange={event => setPost(event.target.value)} value={post} /><br />
            <Button onClick={toDB}>wyślij</Button>
            <Link to="/zmiana"><Button id='pass' >zmień hasło</Button></Link>
            <Link to="/logowanie" onClick={()=>Cookies.remove('username')}><Button id='pass' >Wyloguj się</Button></Link>
            </div>
        </div>
    )
}
