import { useState, useEffect } from 'react'

export function useCatImage ({ fact }) {
  const API_URL_IMG = 'https://cataas.com/cat/says/'
  const [imageURL, setImageURL] = useState()
  useEffect(() => {
    if (!fact) return
    const firstWords = fact.split(' ')[0]
    fetch(`${API_URL_IMG}${firstWords}`)
      .then(res => {
        const { url } = res
        setImageURL(url)
      })
  }, [fact])
  return { imageURL }
}
