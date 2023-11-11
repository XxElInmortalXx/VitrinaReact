import { useState } from 'react'
import { useClima } from '../hooks/useClima'

export function ClimaApp () {
  const [city, setCity] = useState('bolivia')
  const { wheater, getWheater } = useClima()
  const handleChange = (e) => {
    const value = e.target.value
    setCity(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getWheater({ city })
  }
  return (
    <main>
      <h1 className='text-4xl text-center font-bold mt-5'>Clima App</h1>
      <section className='w-[90%] container mx-auto my-5'>
        <form onSubmit={handleSubmit}>
          <input className='border-2 rounded-xl w-full p-2 text-center placeholder:text-center placeholder:text-xl outline-none' type='text' placeholder='Bolivia' onChange={handleChange} />
        </form>
      </section>
      {wheater && (
        <section className='border-2 rounded-xl mx-auto w-[90%] p-5'>
          <h2 className='text-center font-bold text-xl'>
            {wheater.location.country}
          </h2>
          <p className='text-center text-lg font-bold text-gray-500'>
            {wheater.location.region}
          </p>
          <p className='mx-auto text-5xl font-bold text-center my-10 leading-none'>
            {wheater.current.temp_c}°C
          </p>
          <p className='text-center'>
            <span className='font-bold'>Última actualización: </span>
            {wheater.current.last_updated}
          </p>
        </section>
      )}
    </main>
  )
}
