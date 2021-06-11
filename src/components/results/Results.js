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

    // useEffect(() => {
        // const date = new Date();
        // const year = (date.getFullYear() - 2).toString();
        // const month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString();
        // const day = date.getDate() < 10 ? "0" + date.getDate().toString() : date.getDate().toString();
        // axios.get(`https://api.cepik.gov.pl/pojazdy?wojewodztwo=XX&data-od=${year + month + day}&limit=5&filter[rodzaj-pojazdu]=${answers[0]}&filter[marka]=${answers[1]}&filter[rok-produkcji]=${answers[2]}&filter[rodzaj-paliwa]=${answers[3]}&filter[liczba-miejsc-ogolem]=${answers[4]}`)
        //     .then(res => {
        //         setApiCars(apiCars.concat(res.data.data));
        //     })
        //     .catch(() => console.log('coś poszło nie tak'))
        // for (let i = 2; i <= 32; i += 2) {
        //     console.log(answers);
        //     axios.get(`https://api.cepik.gov.pl/pojazdy?wojewodztwo=${i < 10 ? "0" : ""}${i}&data-od=${year + month + day}&limit=5&filter[rodzaj-pojazdu]=${answers[0]}&filter[marka]=${answers[1]}&filter[rok-produkcji]=${answers[2]}&filter[rodzaj-paliwa]=${answers[3]}&filter[liczba-miejsc-ogolem]=${answers[4]}`)
        //         .then(res => {
        //             setApiCars(apiCars.concat(res.data.data));
        //             console.log(`https://api.cepik.gov.pl/pojazdy?wojewodztwo=${i < 10 ? "0" : ""}${i}&data-od=${year + month + day}&limit=5&filter[rodzaj-pojazdu]=${answers[0]}&filter[marka]=${answers[1]}&filter[rok-produkcji]=${answers[2]}&filter[rodzaj-paliwa]=${answers[3]}&filter[liczba-miejsc-ogolem]=${answers[4]}`);
        //         })
        //         .catch(() => console.log('coś poszło nie tak'))
    //     }
    // })

    return (
        <div className="result-container">
            {
                apiCars.map((element, index) => {
                    if(index<10){
                        return <Card key={index} className='result-card'>
                            <CardActionArea>
                                <CardMedia
                                    className='result-image'
                                    image="../../../img/slider1.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                        across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    }
                })
            }
            <Link to="/carCard">Zobacz więcej</Link>
        </div>
    )
}
