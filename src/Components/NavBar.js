import React from 'react'
import styled from 'styled-components'
import BackArrow from '../Assets/closem.svg'
import Logo from '../Assets/logo.svg'
import PrimaryBtn from './PrimaryBtn'

export default function NavBar() {
    return (
        <NavContainer>
  
        <div className='overlay'/>

   
        <div className='contain'>
            <div>
                <div className='logo-contain'>
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
    /* right: 0; */
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;

    .overlay{
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
        top: 0;
        width: 280px;
        color: white;
        justify-content: center;
        display: flex;

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
    }

    .menu-contain li{
        width: 100%;
        text-align: left;
        list-style: none;
        padding-top: 10px;
        padding-bottom: 10px;
        margin: 0;
    }

    .divider{
        width: 100%;
        background-color: #ffff;
        height: 1px;
        margin-top: 20px;
    }


`