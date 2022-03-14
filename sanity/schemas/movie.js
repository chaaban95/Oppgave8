import {MdLocalMovies as icon} from 'react-icons/md'

const movies = {
  name: 'movie',
  title: 'Movie',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The name of the movie',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'The unique and last part of the url',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 100,
      },
    },
    {
      name: 'releaseDate',
      title: 'Release date',
      type: 'datetime',
    },
    {
      name: 'poster',
      title: 'Poster Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Actor',
      name: 'actor',
      type: 'reference',
      to: [{ type: 'actor' }],
    },
    
  ],
  preview: {
    select: {
      title: 'title',
      date: 'releaseDate',
      media: 'poster',
      actor: 'actor.name',
    },
    prepare(selection) {
      const { title, actor } = selection
      return {
        title,
        date: selection.date,
        subtitle: `Actor: ${actor}`,
        media: selection.media,
      }
    },
  },
}

export default movies
