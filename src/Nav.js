import React, { useContext } from 'react'
import styled from 'styled-components'
import { MovieContext } from "./MovieContext"

const Nav = () => {

    const [Movies, setMovies] = useContext(MovieContext)

    return (
        <Container>
            <h3>Dev Ed</h3>
            <p>List of Movies: {Movies.length}</p>
        </Container>
    )
}

export default Nav

const Container = styled.div`
    display:flex;
    justify-content:space-between;
    padding:10px 225px;
    background-color:#000;
    color:white;

    @media (max-width:998px){
        padding:10px 150px;
    }
    @media (max-width:778px){
        padding:10px 125px;
    }
    @media (max-width:568px){
        padding:10px 75px;
    }
`
