import { useState, useEffect } from 'react'
import { getMovies, getMovie } from '../lib/movieService'
import { Link } from 'react-router-dom'

function MovieList({ data }) {
    return (
      <section >
        {data?.map((mov) => (
          <article key={mov.slug}>
            <h2>{mov.title}</h2>
            <Link to={mov.slug}>
              {mov.slug}
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
            <MovieList data={data}/>
        </>
    )
}