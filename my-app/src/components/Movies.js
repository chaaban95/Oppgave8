import { useState, useEffect } from 'react'
import { getMovieByActor, getMovies } from '../lib/movieService'
import { Link } from 'react-router-dom'
import Title from './Title'

function MovieList({ data }) {
  return (
    <section className='cards'>
      {data?.map((mov) => (
        <article className='card' key={mov.slug}>
          <h2>{mov.title}</h2>
          <img className='posters' 
            src={mov?.image?.asset?.url}
            alt={""}
          />
          <h4>Starring: {mov.actor}</h4>
          <Link to={mov.slug}>
            read more
          </Link>
        </article>
      ))}
    </section>
  )
}

export default function Movies() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const getMoviesData = async () => {
      setLoading(true)
      const movies = await getMovies()
      setLoading(false)
      setData(movies)
    }
    getMoviesData()
 }, [])

const handleFilter = async (event) => {
  const actor = event.target.value
  let dataa
  if (actor === 'All') {
    dataa = await getMovies()
  } else {
    dataa = await getMovieByActor(actor)
  }
  setData(dataa)
}

if (loading) {
  return <p>Loading...</p>
}
  
  return (
    <>
      <p className='breadcrumb'>Home / Movies</p>
      <Title title="Movies" />
      <div className='filter'>
      <label 
        className='marginright'
        htmlFor="movieByActor"
      >
        Filter by Actor: 
      </label>
      <select
        id="movieByActor"
        defaultValue="All"
        onChange={handleFilter}
      >
      <option value="All">All</option>
      {data.map((act) => (
        <option key={act.actor} value={act.actor}>
          {act.actor}
        </option>
      ))}
      </select>
      </div>
      <MovieList data={data}/>
    </>
  )
}