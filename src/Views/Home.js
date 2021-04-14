import React from 'react'
import Banner from '../Components/Banner'
import ImageVan from '../Assets/homebanner.png'
import Imagebg from '../Assets/yatebg.jpg'
import styled from 'styled-components'

export default function Home() {
    return (
        <HomeContainer>
           
            <div className='contain-info'>
                <div>
                    <h1>EMBARCACIONES PERFECTAS PARA CUALQUIER OCASIÓN</h1>
                    <span>CIENTOS DE EMBARCACIONES PARA ALQUILER O COMPRA</span>
                    <div className='contain-buttons'>
                        <button className='btn-primary'>Rentar</button>
                        <button className='btn-secundary'>Comprar</button>
                    </div>
                </div>
            </div>
        </HomeContainer>
    )
}


const HomeContainer = styled.div`

    position: absolute;
    margin: auto;
    
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    text-align: center;
    justify-content: center;
    align-self: center;
    align-items: center;
    background-image: linear-gradient(to bottom, rgba(22, 162, 217, 0.10), rgba(22, 162, 217, 0.25)), url(${ImageVan});
    background-size: contain;
    color: #fff;


    .contain-info{
        display: flex;
        height: 100%;
        align-items: flex-end;
        align-content: end;
        align-self: end;
        margin: auto;
        justify-content:end;
        padding-left: 10px;
        padding-right: 10px;
        margin-bottom: 10px;
    }
    .contain-buttons{
        display: flex;
        height: 100%;
        align-items: center;
        align-content: center;
        align-self: center;
        margin: auto;
        justify-content:center;
        padding-left: 10px;
        padding-right: 10px;
        margin-bottom: 50px;
    }

        span{
            font-size: 13px;
        }
        h1{
            font-size: 18px;
        }

    @media screen and (min-width: 769px){
        background-image: linear-gradient(to bottom, rgba(22, 162, 217, 0.10), rgba(22, 162, 217, 0.25)), url(${Imagebg});
        background-size: cover;
        .contain-info{
        display: flex;
        height: 100%;
        align-items: center;
        align-content: center;
        align-self: center;
        margin: auto;
        justify-content:center;
        padding-left: 10px;
        padding-right: 10px;
    }
        h1{
            font-size: 40px;
        }
        span{
            font-size: 20px;
        }

    }
`