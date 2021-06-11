import React from 'react';
import {images} from './other/images'
import { Fade } from 'react-slideshow-image';
import { Link } from 'react-router-dom';
import { Button }  from '@material-ui/core'

export default function Main() {
    return (
        <div id='mainer' >
            <div id='slider' >
            <Fade arrows={false} duration={5000} pauseOnHover={false} >
                    { images.map( (zdj, i) => 
                        <div key={i} className='slide' >
                            <img src={zdj} key={i}   />
                            <div className='text-rog'  >
                                <h1>RUI - miasto przyszłości</h1>
                                <p> Zrób quiz i zobacz wymarzone auto </p>
                                <Link to='formularz' ><Button> Zobacz </Button></Link>
                            </div>
                        </div>
                    )}
                </Fade>
            </div>
            </div>
    )
}
