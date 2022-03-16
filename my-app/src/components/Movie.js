import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getMovie } from '../lib/movieService'
import Title from './Title'

export default function Movie () {
    const { slug } = useParams()
    const [moviee, setMovie] = useState(null)

    useEffect(()=>{
        const getMovieData = async () => {
            const movieData = await getMovie(slug)
            setMovie(movieData)
            console.log(movieData)
        }
        getMovieData()
    }, [slug])
    
    return (
        <>
            <p className='breadcrumb'>Home / Movies / {moviee?.slug}</p>
            <Title title={moviee?.title} />
        </>
    )
}