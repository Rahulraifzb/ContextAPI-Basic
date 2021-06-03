import React, { useState, createContext } from 'react'

export const MovieContext = createContext()

export const MovieProvider = ({ children }) => {
    const [movies, setMovies] = useState([
        {
            name: "Harry Potter",
            price: "$10",
            id: 23415
        },
        {
            name: "Game of Thrones",
            price: "$20",
            id: 23416
        },
        {
            name: "Inception",
            price: "$30",
            id: 23417
        }
    ])
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {children}
        </MovieContext.Provider>
    )
}


