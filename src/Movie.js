import React from 'react'
import styled from 'styled-components'

const Movie = ({ name, price }) => {
    return (
        <MovieContainer>
            <H3>{name}</H3>
            <h4>{price}</h4>
        </MovieContainer>
    )
}

export default Movie

const MovieContainer = styled.div`
   margin-top:5px; 
`

const H3 = styled.h3`
    text-align:center;
    margin-bottom:5px;
`
