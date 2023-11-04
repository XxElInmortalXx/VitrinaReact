import { useRef, useState } from 'react'

function App () {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const item = useRef()

  const handlePointerMovie = (e) => {
    setPosition({ x: e.clientX, y: e.clientY })
    item.current.style.top = `${position.y - 20}px`
    item.current.style.left = `${position.x}px`
  }

  const handlePointerLeave = (e) => {
    item.current.style.top = '28%'
    item.current.style.left = '50%'
    item.current.style.transform = 'translateX(-50%)'
  }

  return (
    <main className='bg-black h-screen'>
      <h1 className='text-center text-white font-bold text-5xl py-4'>MouseMove</h1>
      <section
        onPointerLeave={handlePointerLeave}
        onMouseMove={handlePointerMovie}
        className='relative h-96 w-80 md:w-96 mx-auto rounded-xl bg-gray-50 text-black grid place-items-center'
      >
        <div
          ref={item}
          className='fixed top-[28%] left-[50%] -translate-x-1/2 w-28 h-10 rounded-xl whitespace-nowrap bg-black text-white grid place-items-center pointer-events-none transition-all duration-300 ease-linear'
        >
          I follow you
        </div>
      </section>
    </main>
  )
}

export default App
