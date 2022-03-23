import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getMovie } from '../lib/movieService'
import Title from './Title'

function Description({ desc, img }) {
    return (
        <>
        <img className='posters' 
            src={img}
            alt={""}
        />
        <h4 className='story'>Story</h4>
        <p className='summary'>{desc}</p>
        </>
    )
}

export default function Movie () {
    const { slug } = useParams()
    const [data, setData] = useState(null)

    useEffect(()=>{
        const getMovieData = async () => {
            const movieData = await getMovie(slug)
            setData(movieData)
            console.log(movieData)
        }
        getMovieData()
    }, [slug])
    
    return (
        <>
            <p className='breadcrumb'>Home / Movies / {data?.slug}</p>
            <Title title={data?.title}/>
            <Description img={data?.image?.asset?.url} desc={data?.summary}/>
        </>
    )
}