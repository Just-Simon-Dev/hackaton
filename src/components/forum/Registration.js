import React, { lazy, useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { database } from '../other/links'
import '../../styles/forum-login.css'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    inputs: {
        margin: "10px 0px 50px 0px"
    },
}));

const link = window.location.href.split('/')[4];

export default function Registration() {
    const classes = useStyles();

    const [login, setLogin] = useState('')
    const [mail, setMail] = useState('')
    const [pass, setPass] = useState('')
    const [next, setNext] = useState(false)

    const checkLog = () => {
        if(login != '' && mail != '' && pass != ''){
            axios.post(database + '/rejestracja', { login: login, mail: mail, haslo: pass })
                .then(res => {
                    setNext(res.data)
                })
        }else{
            alert('musisz wypełnić formularz')
        }
    }

    useEffect(() => {
        return () => {
            setLogin('')
            setPass('')
        }
    }, [])
    return (
        <div>
            <form className="forum-login">
                <div className="forum-title">Rejestracja</div>
                <TextField className={classes.inputs} id="outlined-basic" label="Login" variant="outlined" onChange={event => setLogin(event.target.value)} value={login} /><br />
                <TextField className={classes.inputs} id="outlined-basic" label="e-mail" variant="outlined" type="e-mail" onChange={event => setMail(event.target.value)} value={mail} /><br />
                <TextField className={classes.inputs} id="outlined-basic" label="Hasło" variant="outlined" type="password" onChange={event => setPass(event.target.value)} value={pass} /><br />
                <Button onClick={checkLog}>Zarejestruj się</Button>
                <Link to="/logowanie"><Button>zaloguj się</Button></Link>

            </form>
            
            {next ? <Redirect to="/logowanie"/> : null}
        </div>
    )
}
