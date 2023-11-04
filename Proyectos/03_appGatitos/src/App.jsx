import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageURL } = useCatImage({ fact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main>
      <h1 className='text-center py-4 font-bold text-4xl'>App Gatitos</h1>
      <button className='block mx-auto bg-black mb-4 text-white py-2 px-4 rounded-xl font-medium border-2 border-black hover:bg-white hover:text-black' onClick={handleClick}>Generar nuevo gatito</button>
      <section className='grid md:grid-cols-2 w-[90%] container mx-auto gap-5 place-items-center'>
        {fact && <p>{fact}</p>}
        {imageURL && <img src={imageURL} alt='imagen potente' />}
      </section>
    </main>
  )
}

export default App
