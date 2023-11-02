import { useEffect, useState } from 'react'

function useFetchFacts () {
  const [fact, setFact] = useState('')
  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  return { fact }
}

function useFetchCat ({ fact }) {
  const [imgUrl, setImgUrl] = useState('')
  useEffect(() => {
    if (!fact) return
    const firstWord = fact?.split(' ', 1).join(' ')
    fetch(`https://cataas.com/cat/says/${firstWord}`)
      .then(res => {
        const { url } = res
        setImgUrl(url)
      })
  }, [fact])
  return { imgUrl }
}

function App () {
  const { fact } = useFetchFacts()
  const { imgUrl } = useFetchCat({ fact })

  return (
    <main>
      <h1 className='text-4xl text-center my-4 font-bold'>App de gatitos</h1>
      <section className='grid grid-cols-1 gap-5 md:grid-cols-2 place-items-center w-[90%] mx-auto container'>
        {fact && <p>{fact}</p>}
        {imgUrl && <img src={imgUrl} alt={`imagen de gatito que empieza con la palabra ${fact}`} />}
      </section>
    </main>
  )
}

export default App
