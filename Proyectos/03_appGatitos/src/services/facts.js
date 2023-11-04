const API_URL = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  try {
    const res = await fetch(API_URL)
    if (!res.ok) throw new Error('Error al consultar la API')
    const data = await res.json()
    return data.fact
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
