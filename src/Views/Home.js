import React from 'react'
import Banner from '../Components/Banner'
import ImageVan from '../Assets/homebanner.png'
import Imagebg from '../Assets/yatebg.jpg'
import styled from 'styled-components'

export default function Home() {
    return (
        <HomeContainer>
           
            
        </HomeContainer>
    )
}


const HomeContainer = styled.div`

     /* position: absolute; */
     top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    text-align: center;
    background-image: linear-gradient(to bottom, rgba(22, 162, 217, 0.10), rgba(22, 162, 217, 0.25)), url(${ImageVan});
    background-size: contain;
    color: #fff;


    @media screen and (min-width: 769px){
        background-image: linear-gradient(to bottom, rgba(22, 162, 217, 0.10), rgba(22, 162, 217, 0.25)), url(${Imagebg});
        background-size: cover;
    }
`