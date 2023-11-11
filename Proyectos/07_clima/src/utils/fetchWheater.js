export async function fetchWheater ({ city }) {
  try {
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_API_KEY}&q=${city}&aqi=no`)
    const json = res.json()
    return json
  } catch (error) {
    console.log(error)
  }
}
