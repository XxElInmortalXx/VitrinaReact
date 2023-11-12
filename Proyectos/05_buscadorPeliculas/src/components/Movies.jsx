export function Movies ({ movies }) {
  const HasMovies = Object.keys(movies).length !== 0

  return (
    <section className='my-8'>
      {
        HasMovies
          ? <ListOfMovies movies={movies} />
          : <NoMoviesResult />
      }
    </section>
  )
}

export function ListOfMovies ({ movies }) {
  return (
    <ul className='w-[90%] mx-auto container grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] place-items-start gap-3'>
      {
        'Search' in movies
          ? (
              movies.Search.map((movie) => (
                <li className='text-center border-2 p-4 border-black rounded-xl h-full' key={movie.imdbID}>
                  <h3 className='font-semibold text-lg'>{movie.Title}</h3>
                  <p>{movie.Year}</p>
                  <img src={movie.Poster} alt={movie.Title} />
                </li>
              ))
            )
          : <p className='text-center'>{movies.Error}</p>
      }
    </ul>
  )
}

export function NoMoviesResult () {
  return (
    <p className='text-center'>No hay nada</p>
  )
}
