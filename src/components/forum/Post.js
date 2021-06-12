import React, {useState} from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import { Button } from '@material-ui/core'
import axios from 'axios'
import Cookies from 'js-cookie'
import { database } from '../other/links'

export default function Post({element, index}) {

    const [newComm, setNewComm] = useState("")

    const id = Cookies.get('username')

    const sendComm = () => {    
        if(newComm != ""){
            axios.post(database +'/dodaj-komentarz', {user_id: id, post_id: element.id_posta, text: newComm})
            .then(res => {
                window.location.reload()
            })
        }else{
            alert('proszę uzupełnić komentarz')
        }
        
    }

    return (
        <Card className='karty' key={index}>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                            Autor: {element.id_autora}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {element.text}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                    <div className='comments' >
                    {element.komentarze.map( (el, index)=> {
                        return el.text_kom != '' ? <Typography variant="body2" color="textSecondary" component="p">
                            {el.autor_kom} napisał(a):  {el.text_kom}
                        </Typography> : null
                    })}
                    </div><br></br>
            
            
            </CardActions>
            <section>
                    <TextField id="filled-basic" label="odpowiedz" variant="filled" onChange={event => setNewComm(event.target.value)} value={newComm} />
                <Button onClick={sendComm}>Wyślij</Button>
                </section>
      </Card>
    )
}
