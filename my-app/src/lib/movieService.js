import client from './client'

const movieFields = `
  title,
  'actor': actor->name,
  'slug': slug.current,
`

const actorFields = `
  title,
  'slug': slug.current,
`

export const getMovies = async () => {
    const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`)
    return data
}

  
export const getMovie = async (slug) => {
  const data = await client.fetch(
    `*[_type == "movie" && slug.current == $slug]{${movieFields}}`,
    { slug }
  )
  return data?.[0]
}

export const getActors = async () => {
  const data = await client.fetch(`*[_type == "actor"]{${actorFields}}`)
  return data
}

export const getActor = async (slug) => {
  const data = await client.fetch(
    `*[_type == "actor" && slug.current == $slug]{${actorFields}}`,
    { slug }
  )
  return data?.[0]
}