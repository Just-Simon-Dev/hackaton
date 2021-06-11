import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export default function Env() {
    const context = [
        { name: "Artykuł 1", link: "https://www.autocentrum.pl/newsy/samochody-elektryczne-bardziej-ekologiczne-nawet-dwu-trzykrotnie/", context: "lorem"},
        { name: "Artykuł 2", link: "https://zmienimyswiat.pl/2020/01/13/czy-samochody-elektryczne-sa-ekologiczne/", context: "lorem" },
        { name: "Artykuł 3", link: "https://moto.pl/MotoPL/7,174430,25666877,czy-samochod-elektryczny-jest-ekologiczny-moto-2030.html", context: "lorem" },
        { name: "Artykuł 4", link: "https://dopower.pl/news/samochody-elektryczne-a-ekologia/", context: "lorem" },
        { name: "Artykuł 5", link: "https://biznesalert.pl/transport-environment-samochody-elektryczne-srodowisko-benzyna-diesel-elektromobilnosc/", context: "lorem" },
        { name: "Artykuł 6", link: "https://motoryzacja.interia.pl/raporty/raport-era-elektromobilnosci/artykuly/news-dlaczego-samochody-elektryczne-sa-najbardziej-przyjazne-srod,nId,3055953", context: "lorem" },
    ]
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
