import { useEffect, useState } from 'react'

export default function FollowMouse () {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <main className='w-screen h-screen bg-gray-950 text-gray-50 grid place-items-center'>
      <div
        className='absolute bg-gray-500 w-[50px] h-[50px] rounded-full opacity-50 pointer-events-none left-[-25px] top-[-25px]'
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
      <button className='border px-6 py-3 rounded-full font-medium' onClick={() => setEnabled(!enabled)}>
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </main>
  )
}
