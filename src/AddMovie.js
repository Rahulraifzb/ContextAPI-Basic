import React, { useContext, useState } from 'react'
import { MovieContext } from './MovieContext'

export const AddMovie = () => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [movies, setMovies] = useContext(MovieContext);

    const handleSubmit = (e) => {
        e.preventDefault()
        setMovies(prevMovies => [...prevMovies, { name: name, price: price, id: Math.random() }])
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            <input type="submit" value="Submit" />
        </form>
    )
}
