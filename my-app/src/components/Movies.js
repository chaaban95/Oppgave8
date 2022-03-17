import { useState, useEffect } from 'react'
import { getMovies } from '../lib/movieService'
import { Link } from 'react-router-dom'
import Title from './Title'

function MovieList({ data }) {
    return (
      <section className='cards'>
        {data?.map((mov) => (
          <article className='card' key={mov.slug}>
            <h2>{mov.title}</h2>
            <h3>{mov.actor}</h3>
            <Link to={mov.slug}>
              read more
            </Link>
          </article>
        ))}
      </section>
    )
  }

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
            <p className='breadcrumb'>Home / Movies</p>
            <Title title="Movies" />
            <MovieList data={data}/>
        </>
    )
}