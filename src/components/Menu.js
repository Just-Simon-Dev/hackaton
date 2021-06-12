import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import logo from './../img/RUI.png'
import bolt from './../img/bolt-solid (1).png'

export default function Menu() {
    const [width, setWidth] = useState( window.innerWidth )
    const [meni, setMeni] = useState('transparent')
    const [showMenu, setShowMenu] = useState(false)
    const [styl, setStyl] = useState('ham-aktywny')
    const [anim, setAnim] = useState( 'wejscie' )

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })
        window.addEventListener('scroll', () => {
            if( window.scrollY > 350){
                setMeni('#161616')
            }else if(window.scrollY < 350){
                    setMeni('transparent')
            }
        })
        return() => {
            setWidth(window.innerWidth)
        }
    }, [])

    return (
        <div className='menu' >
         <Link to='/' className='top-logo' onClick={() => {
      if(  width <=  600 && showMenu == true ){
        setStyl('ham-aktywny')
        setAnim('wyjscie')
        setTimeout( () =>{
            setShowMenu(false)
        }, 1000 )
      }

  }}  > <img src={ logo } alt='logo' /> <img src={ bolt } alt='logo' id='bolt' /> </Link>
        { width <=  680 ? 
        <div className="center" onClick={() => {
            if( styl === 'ham-aktywny' ){
                setStyl('ham-nieaktywny')
                setAnim('wejscie')
                setShowMenu(true)
            }else{
                setStyl('ham-aktywny')
                setAnim('wyjscie')
                setTimeout( () =>{
                    setShowMenu(false)
                }, 1000 )
            }
        }} >
            
            <div className={styl}  >
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
        :
            <div >
                <div className='right' >
                    <li> <Link to='/formularz' >Formularz </Link></li>
                    <li> <Link to='/forum' >Forum </Link> </li>
                    <li><Link to='/bezpieczenstwo' > Bezpieczeństwo </Link></li>
                    <li><Link to='/srodowisko' > Środowisko </Link></li>
                </div>
        </div> 
        }
        {showMenu ? <div className='smol-menu' style={{animationName: anim}} onClick={() => {
             setStyl('ham-aktywny')
             setAnim('wyjscie')
             setTimeout( () =>{
                 setShowMenu(false)
             }, 1000 )
         
        }} >
                        <div className='sect' >
                        <li> <Link to='/formularz' >Formularz </Link></li>
                            <li><Link to='/forum' > Forum </Link></li>
                            <li><Link to='/bezpieczenstwo' > Bezpieczeństwo </Link></li>
                            <li><Link to='/srodowisko' > Środowisko </Link></li>
                        </div>
                    </div> : null}
        </div>
    )
}
