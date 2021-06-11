import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Results from '../results/Results'
import serce from './../../img/heart.svg'
import {questions} from './../other/questions'

export default function Quiz() {
    const [pytanie, setPytanie] = useState( 0 )
    const [answers, setAnswers] = useState([])
    const [ready, setReady] = useState( false )

    useEffect(() => {
        return  () => {
            setPytanie(0)
            setReady(false)
        }
    }, [])

    const answerSelected = ( ans ) => {
        if( pytanie < questions.length -1  ){
        setPytanie( e => e +1 )
        setAnswers( e => [...e, ans] )
        
        }else{
            setAnswers( e => [...e, ans] )
            setReady( true )
        }
        
    }

    return (
        <div id='quiz' >
            { !ready ?
            <div>
                <h1> { questions[pytanie].title } </h1>
                { questions[pytanie].answers.map( (que, i) => 
                    <Button key={i} onClick={ e => answerSelected( que ) } > {que} </Button>
                ) }
            </div>
            :
            <Results answers={ answers } />
        }
        {console.log( answers )}
        </div>
    )
}
