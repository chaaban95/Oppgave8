import { useState, useEffect } from 'react'
import { getActors } from '../lib/movieService'
import { Link } from 'react-router-dom'
import Title from './Title'

function ActorList({ data }) {
  return (
    <section className='cards'>
      {data?.map((act) => (
        <article className='card' key={act.slug}>
          <h2>{act.name}</h2>
          <img className='actors' 
            src={act?.image?.asset?.url}
            alt={""}
          />
          <Link to={act.slug}>
            read more
          </Link>
        </article>
      ))}
    </section>
  )
}

export default function Actors() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const getActorsData = async () => {
      setLoading(true)
      const actors = await getActors()
      setLoading(false)
      setData(actors)
    }
    getActorsData()
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }
  
  return (
    <>
      <p className='breadcrumb'>Home / Actors</p>
      <Title title="Actors" />
      <ActorList data={data}/>
    </>
  )
}