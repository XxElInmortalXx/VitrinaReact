import { useState } from 'react'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App () {
  const [sort, setSort] = useState(false)
  const [query, setQuery] = useState('')
  const { movies, getMovies } = useMovies({ query, sort })

  const handleChangeQuery = (e) => {
    const value = e.target.value
    setQuery(value)
  }

  const handleChangeSort = () => {
    setSort(!sort)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getMovies({ query })
  }

  return (
    <main>
      <h1 className='text-center font-bold text-2xl my-4'>Buscador de peliculas</h1>
      <form
        onSubmit={handleSubmit}
        className='w-80 mx-auto flex justify-center items-center'
      >
        <input
          onChange={handleChangeQuery}
          className='border border-black p-2 border-r-0 outline-none'
        />
        <button className='border border-black p-2'>Search</button>
        <input className='h-full w-full block p-2' type='checkbox' checked={sort} onChange={handleChangeSort} />
      </form>
      <Movies movies={movies} />
    </main>
  )
}

export default App
