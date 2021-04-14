import React, {useState} from 'react'
import styled from 'styled-components'
import BackArrow from '../Assets/closem.svg'
import menuItem from '../Assets/burger.svg'
import Logo from '../Assets/logo.svg'
import PrimaryBtn from './PrimaryBtn'

export default function NavBar() {

     const [menu, setMenu] = useState(false);

     const showMenu = () => {
        setMenu(!menu)
    }


    return (
        <NavContainer>
  
        <div className= {menu ? 'overlay' : 'overlay-hiden'}/>

   
            
                <div className='logo-contain2'>
                    <div className='logo-contain'>
                        <img src={Logo} alt="sistemares" />
                    </div>
                    <img src={menuItem} alt="sistemares" className='loguito' onClick={showMenu}/>
                </div>
        <div className={menu ? 'contain' : 'contain-hiden'}>
            <div>
                <div className='logo-contain' onClick={showMenu}>
                    <img src={BackArrow} alt="sistemares"/>
                </div>
                <div className='logo-contain'>
                    <img src={Logo} alt="sistemares"/>
                </div>
                <div className='menu-contain'>
                    <ul>
                        <li>ALQUILA UNA EMBARCACIÓN</li>
                        <li>COMPRA UNA EMBARCACIÓN</li>
                    </ul>
                </div>
                        <PrimaryBtn/>
                    {/* <br></br> */}
                <div className='divider'></div>
                <div className='menu-contain'>
                    <ul>
                        <li>PREGUNTAS FRECUENTES</li>
                        <li>NOSOTROS</li>
                        <li>CONTACTANOS</li>
                        <li>TERMINOS Y CONDICIONES</li>
                        <li>POLITICA DE PRIVACIDAD</li> 
                    </ul>
                </div>
            </div>
        </div>

        </NavContainer>
    )
}


const NavContainer = styled.div`
    /* Container takes full size */
    height: 100%;
    /* right:   -200px; */
    position: fixed;
    top: 0;
    width: 100%;
    
    
    z-index: 9999;

    .overlay{
    background-color: rgba(0, 0, 0, 0.6);
        height: 100%;
        /* right: 0; */
        position: fixed;
        top: 0;
        width: 100%;
        transition: all ease .3s;
        /* User still can see the content of main page */
        // backgroundColor: '#000',

        z-index: -1;
    }
    .overlay-hiden{
        height: 100%;
        /* right: 0; */
        position: fixed;
        top: 0;
        width: 100%;

        /* User still can see the content of main page */
        // backgroundColor: '#000',

        z-index: -1;
    }

    .contain{
         /* Take full height */
         height: 100vh;
        right: 0;
        position: fixed;
        transition: all ease .3s;
        top: 0;
        width: 280px;
        color: white;
        justify-content: center;
        display: flex;
        opacity: 1;

        /* Background */
        background-color: #1A243B;
    }
    .contain-hiden{
         /* Take full height */
         height: 0vh;
        right:  -10px;
        position: fixed;
        top: 330;
        width: 0px;
        color: white;
        justify-content: right;
        display: flex;
        opacity: 1;

        /* Background */
        background-color: #1A243B;
    }

    .logo-contain{
        width: 100%;
        justify-content: start;
        display: flex;
        padding-top: 10px;
        /* background-color: #ffff; */
    }

    .logo-contain2{
        width: 100%;
        justify-content: space-around;
        display: inline-flex;
        padding-top: 10px;
        padding-left: 0px;

        
        /* background-color: #ffff; */
    }
    .logo-contain2 .loguito{
        width: 60px;
        justify-content: space-around;
        display: inline-flex;
        padding-top: 10px;
        padding-left: 0px;
        color: #000;
        cursor: pointer;
        
        /* background-color: #ffff; */
    }

    .menu-contain{
        width: 100%;
        justify-content: center;
        display: block;
        padding: 10px;
        /* background-color: #ffff; */
    }

    ul{
        width: 100%;
        display: block;
        /* left: 0; */
        text-align: left;
        padding:0;
        margin: 0;
        cursor: pointer;
    }

    .menu-contain li{
        width: 100%;
        text-align: left;
        list-style: none;
        padding-top: 10px;
        padding-bottom: 10px;
        margin: 0;
    }
    .menu-contain li:active{
        transform: translateY(2px);
    }

    .divider{
        width: 100%;
        background-color: #ffff;
        height: 1px;
        margin-top: 20px;
    }


`