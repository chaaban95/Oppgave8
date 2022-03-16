import { useState, useEffect } from 'react'
import { getMovies, getMovie } from '../lib/movieService'

export default function Movies() {
    const [ data, setData] = useState([])

    useEffect(()=>{
        const getMoviesData = async () => {
            const movies = await getMovies()
            setData(movies)
            console.log(movies)
        }
        getMoviesData()

        const getMovieData = async () => {
            const slug = 'movie-1'
            const movie = await getMovie(slug)
            console.log(movie)
        }
        getMovieData()

    }, [])
    
    return (
        <>
            <h2>All Movies</h2>
            {data?.length > 0 ? <p>{JSON.stringify(data)}</p> : null}
        </>
    )
}