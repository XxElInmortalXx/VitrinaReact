export async function fetchUsers () {
  try {
    const res = await fetch('https://randomuser.me/api/?results=100')
    const json = await res.json()
    return json.results
  } catch (error) {
    throw new Error('Error al consumir la API')
  }
}
