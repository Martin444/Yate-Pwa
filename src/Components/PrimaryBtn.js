import React from 'react'
import styled from 'styled-components'

export default function PrimaryBtn() {
    return (
        <BtnContainer>
            Registrate
        </BtnContainer>
    )
}

const BtnContainer = styled.button`

    color: #fff;
    font-weight: bold;
    font-size: 17px;
    width: 100%;
    height: 40px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background: transparent;
    box-shadow:  1px 2px 0px #ffff, 
                -1px -2px 0px #fff;
`