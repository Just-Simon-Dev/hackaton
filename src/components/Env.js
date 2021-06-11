import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import {context2 as context} from './other/articles'

export default function Env() {

    return (
        <div className="safety-container">
            {
                context.map((element, i) => {
                    return <Card className='karty' key={i}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {element.name}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {element.context}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <a href={element.link} target="_blank"><Button size="small">czytaj więcej</Button></a>
                        </CardActions>
                    </Card>
                })
            }

        </div>
    )
}
