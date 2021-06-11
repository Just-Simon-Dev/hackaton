import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export default function Env() {
    const context = [
        { name: "Wpływ elektryków na środowisko", link: "https://www.autocentrum.pl/newsy/samochody-elektryczne-bardziej-ekologiczne-nawet-dwu-trzykrotnie/", context: "Masz wątpliwości czy samochody napędzane energią elektryczną rzeczywiście mają pozytywny wpływ na środowisko? Ten artykuł przekonuje, że jest inaczej! "},
        { name: "Czy samochody elektryczne są ekologiczne?", link: "https://zmienimyswiat.pl/2020/01/13/czy-samochody-elektryczne-sa-ekologiczne/", context: "Artykuł ten opisuje wpływ pojazdów elektrycznych na ekologię oraz konieczność ratowania naszej planety ze względu na wyniszczający wpływ smogu na klimat." },
        { name: "Czy polskie auta elektryczne jeżdżą na węgiel?", link: "https://moto.pl/MotoPL/7,174430,25666877,czy-samochod-elektryczny-jest-ekologiczny-moto-2030.html", context: " Nie wszystkie kraje na świecie pozyskują energię elektryczną w sposób ekologiczny. Niektóre - tak jak polska - palą węgiel aby ją pozyskać. Czy to czyni samochody elektryczne tak samo zgubnymi dla środowiska jak auta spalinowe? " },
        { name: "'Czystość' samochodów elektrycznych w praktyce", link: "https://dopower.pl/news/samochody-elektryczne-a-ekologia/", context: "Czy elektryki będą w pełni 'czyste'? Odpowiedź nie jest jednoznaczna, przekonaj się o wpływie samochodów elektrycznych na środowisko!" },
        { name: " Brukselskie badania na temat ekologiczności elektryków ", link: "https://biznesalert.pl/transport-environment-samochody-elektryczne-srodowisko-benzyna-diesel-elektromobilnosc/", context: " Analiza analityków dotycząca emicji CO2 przez samochody. " },
        { name: "Emisja szkodliwych substancji", link: "https://motoryzacja.interia.pl/raporty/raport-era-elektromobilnosci/artykuly/news-dlaczego-samochody-elektryczne-sa-najbardziej-przyjazne-srod,nId,3055953", context: "Przekonaj się czy rzeczywiście samochody elektryczne emitują mniej substancji zgubnych dla środowiska!" },
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
