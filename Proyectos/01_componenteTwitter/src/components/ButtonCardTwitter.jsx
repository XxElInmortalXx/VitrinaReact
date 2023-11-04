import { useState } from 'react'
function ButtonCardTwitter ({ initialIsFollowing }) {
  const [following, setFollowing] = useState(initialIsFollowing)
  const [text, setText] = initialIsFollowing ? useState('Seguir') : useState('Siguiendo')
  const [styleButton, setStyleButton] = initialIsFollowing ? useState('bg-white text-black') : useState('text-white border-white')

  const handleButton = () => {
    setFollowing(!following)
    if (following) {
      setText('Siguiendo')
      setStyleButton('text-white border-white')
    } else {
      setText('Seguir')
      setStyleButton('bg-white text-black')
    }
  }

  const handlePointerEnter = () => {
    if (text === 'Siguiendo') {
      setText('Dejar de seguir')
      setStyleButton('text-red-500 bg-opacity-25 bg-red-500 border-red-500')
    }
  }

  const handlePointerLeave = () => {
    if (text === 'Dejar de seguir') {
      setText('Siguiendo')
      setStyleButton('text-white border-white')
    }
  }

  return (
    <button className={`py-2 px-4 font-medium rounded-full transition-all duration-30 whitespace-nowrap border ${styleButton}`} onClick={handleButton} onPointerEnter={handlePointerEnter} onPointerLeave={handlePointerLeave}>
      {text}
    </button>
  )
}

export default ButtonCardTwitter
