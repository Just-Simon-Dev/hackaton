import React, {lazy} from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import '../../styles/forum-login.css'

const Main = lazy(() => import('./Main'))
const Account = lazy(() => import('./Account'))

const useStyles = makeStyles((theme) => ({
    inputs: {
        margin: "10px 0px 50px 0px"
    },
}));

export default function Login() {

    const classes = useStyles();

    return (
        <div>
            <form className="forum-login">
                <div className="forum-title">Logowanie</div>
                <TextField className={classes.inputs} id="outlined-basic" label="Login" variant="outlined" /><br/>
                <TextField className={classes.inputs} id="outlined-basic" label="Hasło" variant="outlined" type="password"/>
            </form>
        </div>
    )
}
