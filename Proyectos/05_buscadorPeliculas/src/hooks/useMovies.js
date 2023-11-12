import { useRef, useState, useMemo, useCallback } from 'react'
import { fetchMovies } from '../utils/fetchMovies'

export function useMovies ({ query, sort }) {
  const [movies, setMovies] = useState({})
  const previusQueary = useRef(query)

  const getMovies = useCallback(async ({ query }) => {
    if (query === previusQueary.current) return
    try {
      previusQueary.current = query
      const newMovies = await fetchMovies({ query })
      setMovies(newMovies)
    } catch (error) {
      console.log(error)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    if (sort) {
      const newArrayMovies = [...movies.Search].sort((a, b) =>
        a.Title.localeCompare(b.Title)
      )
      const sortedMovies = { ...movies, Search: newArrayMovies }
      return sortedMovies
    } else {
      return movies
    }
  }, [movies, sort])

  return { movies: sortedMovies, getMovies }
}
