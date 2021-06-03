import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { AddMovie } from './AddMovie'
import Movie from './Movie'
import { MovieContext } from "./MovieContext"

const MovieList = () => {

    const [movies, setMovies] = useContext(MovieContext);

    return (
        <MovieListContainer>
            <AddMovie />
            {movies.map((movie) => (
                <Movie name={movie.name} price={movie.price} key={movie.id} />
            ))}
        </MovieListContainer>
    )
}

export default MovieList

const MovieListContainer = styled.div`
    margin-top:20px;
    text-align:center;
`