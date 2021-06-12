import axios from 'axios';
import React, { useEffect, useState} from 'react'



export default function ResultCard() {

    const link = window.location.href.split('/')[4];
    const [data, setData] = useState({})

    useEffect(()=>{
        axios.get('https://api.cepik.gov.pl/pojazdy/'+link)
            .then(res => {
                setData(res.data.data.attributes);
            })
    }, [])
    return (
        <div className='res-card' >
            <h1>{data.marka} {data.model}</h1>
            <ul>
                <li>dopuszczalna masa calkowita: {data['dopuszczalna-masa-calkowita']}</li>
                <li>Czy ma hak: {data.hak ? "tak" : "nie"}</li>
                <li>podrodzaj pojazdu: {data['podrodzaj-pojazdu']}</li>
                <li>pojemność skokowa silnika: {data['pojemnosc-skokowa-silnika']}</li>
                <li>rodzaj paliwa: {data['rodzaj-paliwa']}</li>
                <li>rodzaj pojazdu: {data['rodzaj-pojazdu']}</li>
                <li>sposób produkcji: {data['sposob-produkcji']}</li>
            </ul>
        </div>
    )
}
