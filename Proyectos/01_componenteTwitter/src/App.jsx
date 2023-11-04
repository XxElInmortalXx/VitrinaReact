import CardTwitter from './components/CardTwitter'

function App () {
  return (
    <main className='w-screen h-screen bg-black text-white'>
      <h1 className='text-center capitalize text-4xl font-bold py-10'>Twitter Component</h1>
      <section className='w-80 md:w-96 h-auto overflow-hidden bg-[#16181C] mx-auto rounded-xl text-white'>
        <h3 className='font-bold text-2xl leading-none py-3 px-4 whitespace-nowrap'>A quién seguir</h3>
        <CardTwitter initialIsFollowing name='El Inmortal' user='elinmortal' />
        <CardTwitter initialIsFollowing name='Andres Eduardo' user='cooler511' />
        <CardTwitter initialIsFollowing name='Nickdraz' user='noobmaster' />
        <a className='text-blue-500 whitespace-nowrap py-3 px-4 block hover:bg-[#1D1F23]' href='#'>Mostrar más</a>
      </section>
    </main>
  )
}

export default App
