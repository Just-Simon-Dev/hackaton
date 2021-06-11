
class Question {
    constructor(title, answers){
        this.title = title;
        this.answers = answers;
    }
}

export const questions = [
    new Question( '1. Jakiego rodzaju pojazdu szukasz?', [ 'samochód osobowy', 'samochód ciężarowy' ] ),
    new Question( '2. Jaką markę pojazdu preferujesz?', [ 'Audi', 'Opel', 'Ford', 'Volkswagen', 'Renault', 'Kia' ] ),
    new Question('3. W jakim przedziale czasowym chcesz aby auto było wyprodukowane:', ['2016-2021', '2010-2015', '2004-2009', '1998-2003']),
    new Question( '4. Jaki rodzaj paliwa wolisz?', [ 'Olej napędowy', 'Benzyna', 'Energia elektryczna', 'Gaz' ] ),
    new Question('5. Ile miejsc ma posiadać pojazd?', [ 2, 5, 7 ])
]