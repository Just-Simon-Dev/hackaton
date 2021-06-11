import React, {lazy, useState, useEffect} from 'react'
import { Link, Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { database } from '../other/links'
import '../../styles/forum-login.css'
import axios from 'axios'

const Main = lazy(() => import('./Main'))
const Account = lazy(() => import('./Account'))

const useStyles = makeStyles((theme) => ({
    inputs: {
        margin: "10px 0px 50px 0px"
    },
}));

const link = window.location.href.split('/')[4];

export default function Login() {

    const classes = useStyles();

    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const [next, setNext] = useState(false)
    const [error, setError] = useState('')

    const checkLog = () => {
        axios.post(database+'/login', {login: login, haslo: pass})
            .then(res => {
                setNext(res.data)
                if(res.data != 'not activated' && res.data != false){
                    document.cookie = "username=" + res.data
                    
                }else{
                    setError('konto nie zostało aktywowane')
                }
            })
    }

    useEffect(()=>{
        return () => {
            setLogin('')
            setPass('')
        }
    }, [])
    return (
        <div>
            <form className="forum-login">
                <div className="forum-title">Logowanie</div>
                <TextField className={classes.inputs} id="outlined-basic" label="Login" variant="outlined" onChange={event => setLogin(event.target.value)} value={login}/><br/>
                <TextField className={classes.inputs} id="outlined-basic" label="Hasło" variant="outlined" type="password" onChange={event => setPass(event.target.value)} value={pass}/><br/>
                <Button onClick={checkLog}>Zaloguj się</Button>
                <div>{error}</div>
            </form>
            <Link to="/rejestracja"><Button>Zarejestruj się</Button></Link>
            {next != false && next != false ? <Redirect to="/forum/glowny" /> : null}
        </div>
    )
}
