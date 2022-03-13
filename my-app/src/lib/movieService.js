import client from './client'

const movieFields = `
  title,
  'slug': slug.current,
  'actor': actor->name,
`

export const getMovies = async () => {
    const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`)
    return data
}

  
