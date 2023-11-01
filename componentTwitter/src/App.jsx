import CardTwitter from './components/CardTwitter'

function App () {
  return (
    <main className='w-screen h-screen bg-gray-100 text-gray-950'>
      <h1 className='text-center capitalize text-4xl font-bold py-10'>Twitter Component</h1>
      <section className='w-80 md:w-96 h-auto overflow-hidden bg-gray-950 mx-auto rounded-xl text-white'>
        <h3 className='font-bold text-2xl leading-none py-3 px-4 whitespace-nowrap'>A quién seguir</h3>
        <CardTwitter initialIsFollowing name='Andres Eduardo' user='elinmortal' />
        <CardTwitter initialIsFollowing={false} name='Elma Canudo' user='elmacanudo' />
        <CardTwitter initialIsFollowing={false} name='Elma Canudo' user='elmacanudo' />
        <CardTwitter initialIsFollowing name='Nickdraz' user='nicoleishon' />
      </section>
    </main>
  )
}

export default App
