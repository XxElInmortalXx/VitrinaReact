const API_URL = 'https://www.omdbapi.com/?apikey='
const API_KEY = '286ff677'

export async function fetchMovies ({ query }) {
  try {
    const res = await fetch(`${API_URL}${API_KEY}&s=${query}`)
    const json = await res.json()
    return json
  } catch (error) {
    console.log('Error Fetch: ', error)
  }
}
