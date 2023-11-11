import { useState } from 'react'
import { fetchWheater } from '../utils/fetchWheater'

export function useClima () {
  const [wheater, setWheater] = useState(null)

  const getWheater = async ({ city }) => {
    try {
      const newWheater = await fetchWheater({ city })
      setWheater(newWheater)
    } catch (error) {
      console.log(error)
    }
  }

  return { wheater, getWheater }
}
