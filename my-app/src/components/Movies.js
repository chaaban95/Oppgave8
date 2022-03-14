import { useState, useEffect } from 'react'
import { getMovies } from '../lib/movieService'

export default function Movies() {
    const [ data, setData] = useState([])

    useEffect(()=>{
        const getMoviesData = async () => {
            const movies = await getMovies()
            setData(movies)
            console.log(movies)
        }
        getMoviesData()
    }, [])
    
    return (
        <>
            <h2>Hei</h2>
            {data?.length > 0 ? <p>{JSON.stringify(data)}</p> : null}
        </>
    )
}