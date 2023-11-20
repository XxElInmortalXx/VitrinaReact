const API_URL = 'https://randomuser.me/api/?results=10&seed=andreseduardo'

export async function fetchUsers () {
  try {
    const res = await fetch(API_URL)
    if (!res.ok) throw new Error('No se pudo consumir la API')
    const json = await res.json()
    return json.results
  } catch (error) {
    return error
  }
}
