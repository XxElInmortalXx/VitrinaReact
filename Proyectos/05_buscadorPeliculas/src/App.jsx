import { useState } from 'react'

function useFetchMovies () {
  const [responseMovies, setResponseMovies] = useState({})

  const getMovies = (query) => {
    fetch(`https://www.omdbapi.com/?apikey=286ff677&s=${query}`)
      .then(res => res.json())
      .then(data => setResponseMovies(data))
  }

  return { movies: responseMovies, getMovies }
}

function App () {
  const [query, setQuery] = useState('')
  const { movies, getMovies } = useFetchMovies()

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies(query)
  }

  return (
    <main>
      <h1 className='text-center font-bold text-2xl my-4'>Buscador de peliculas</h1>
      <form
        onSubmit={handleSubmit}
        className='w-80 mx-auto flex justify-center'
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='border border-black p-2 border-r-0 outline-none'
        />
        <button className='border border-black p-2'>Search</button>
      </form>
      <section className='my-8'>
        {
          'Search' in movies
            ? (
              <ul className='w-[90%] mx-auto container grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] place-items-start gap-3'>
                {
                movies.Search.map((movie) => (
                  <li className='text-center border-2 p-4 border-black rounded-xl h-full' key={movie.imdbID}>
                    <h3 className='font-semibold text-lg'>{movie.Title}</h3>
                    <p>{movie.Year}</p>
                    <img src={movie.Poster} alt={movie.Title} />
                  </li>
                ))
                }
              </ul>
              )
            : <p className='text-center'>{movies.Error}</p>
        }
      </section>
    </main>
  )
}

export default App
