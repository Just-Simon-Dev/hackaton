import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

export default function Safety() {

    const useStyles = makeStyles({
        root: {
            width: "33%",
            height: "211px",
            display: "inline-block",
        },
    });

    const context = [
        { name: "Artykuł 1", link: "http://skoda-safety.wp.pl/artykul/czy-male-i-nowoczesne-auta-sa-bezpieczniejsze-niz-wieksze-i-starsze", context: "Zastanawiasz się nad pierwszym autem i chciałbyś, żeby było bezpieczne? A może chcesz dowiedzieć się o nowinach motoryzacyjnych. To jest artykuł, w którym są poruszane najważniejsze kwestie bezpieczeństwa auta od reflektorów po nowoczesne systemy wspomagania kierowcy."},
        { name: "Artykuł 2", link: "https://forsal.pl/artykuly/1430650,impact-czy-samochody-elektryczne-sa-bezpieczniejsze-od-samochodow-spalinowych.html", context: "Chciałbyś zaczerpnąć wiedzy na  temat bezpieczeństwa samochodów elektrycznych? Chciałbyś zobaczyć twarde statystyki? O to artykuł doskonały dla ciebie! Znajdziesz tutaj informacje na temat pożarów samochodów elektrycznych oraz crash testach." },
        { name: "Artykuł 3", link: "https://knaufautomotive.com/pl/jak-samochody-elektryczne-poprawiaja-bezpieczenstwo-na-drogach/", context: "Chciałbyś poznać statystyki na temat bezpieczeństwa oraz wypadków samochodów elektrycznych? A może dowiedzieć się jak budowa samochodu elektrycznego wpływa na bezpieczeństwo? Jeżeli tak, to jest artykuł doskonały właśnie dla ciebie!" },
        { name: "Artykuł 4", link: "https://e.autokult.pl/34235,samochody-elektryczne-dla-opornych-przedstawiamy-fakty-obalamy-mity", context: "Chcesz kupić elektryka, ale nie wiesz czy się opłaca? A może chciałbyś porównać koszta użytkowana? To jest artykuł dla ciebie! Znajdziesz tutaj wszystkie ważne informacje na temat elektryków." },
        { name: "Artykuł 5", link: "https://www.autoexpert.pl/artykuly/wplyw-nowych-technologii-na-bezpieczenstwo-jazdy-samochodow", context: "Chciałbyś wiedzieć o nowinkach technologicznych w branży motoryzacyjnej? A może ciekawisz się jak udoskonalić swoją jazdę? Jeśli tak, to jak najszybciej musisz przeczytać właśnie ten artykuł!" },
        { name: "Artykuł 6", link: "https://mojafirma.infor.pl/moto/eksploatacja-auta/porady-uzytkowe/697553,Co-w-samochodzie-odpowiada-za-bezpieczenstwo-pasazerow.html", context: "W tym artykule jest opisane bezpieczeństwo w pigułce. Chciałbyś poznać twarde fakty o systemach wspomagających kierowcę albo co chroni kierowcę i pasażerów podczas jazdy? To jest ten artykuł, który powinieneś przeczytać!" },
    ]
    const classes = useStyles();
    return (
        <div className="safety-container">
            {
                context.map((element, i) => {
                    return <Card className={classes.root} key={i}>
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
