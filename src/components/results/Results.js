import React, { lazy, useEffect, useState } from 'react'
import axios from 'axios'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

export default function Results({answers}) {

    const [apiCars, setApiCars] = useState([]);
    const [loader, setLoader] = useState(false);

    const date = new Date();
    const year = (date.getFullYear() - 2).toString();
    const month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString();
    const day = date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate().toString();
    const days = answers[2].split('-');

    useEffect(() => {
        for (let i = Number.parseInt(days[0]); i <= Number.parseInt(days[1]); i++)
            axios.get(`https://api.cepik.gov.pl/pojazdy?wojewodztwo=02&data-od=${year + month + day}&limit=2&filter[rodzaj-pojazdu]=${answers[0]}&filter[marka]=${answers[1]}&filter[rok-produkcji]=${i}&filter[rodzaj-paliwa]=${answers[3]}&filter[liczba-miejsc-ogolem]=${answers[4]}`)
                .then(res => {
                    setApiCars(apiCars.concat(res.data.data));
                })
                .catch((err) => console.log(err))
    }, [])

    return (
        <div className="result-container">
            {
                apiCars.map((element, index)=>{
                    
                        return <Card key={index} className='result-card'>
                                    <CardMedia
                                        className='result-image'
                                        image="../../../img/slider1.jpg"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                        {element.attributes.marka} {element.attributes.model}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                            rok produkcji: {element.attributes['rok-produkcji']}
                                        </Typography>
                                    </CardContent>
                            
                                <CardActions>
                                    <Link to={"/carCard/"+element.id}><Button size="small">Zobacz więcej</Button></Link>
                                </CardActions>
                            </Card>
                })
            }
            
        </div>
    )
}
