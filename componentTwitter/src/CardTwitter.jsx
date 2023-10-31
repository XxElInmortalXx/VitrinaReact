import { useState } from 'react'

function CardTwitter ({ initialIsFollowing, name, user }) {
  const [following, setFollowing] = useState(initialIsFollowing)
  const text = following ? 'Siguiendo' : 'Seguir'
  const styleButton = following ? 'text-white bg-gray-950' : 'bg-white text-black'
  const handleButton = (e) => {
    setFollowing(!following)
    e.target.innerText = following ? 'Seguir' : 'Siguiendo'
  }
  const handlePointerEnter = (e) => {
    if (following && text === 'Siguiendo') {
      e.target.innerText = 'Dejar de seguir'
      e.target.style.backgroundColor = '#ef444430'
      e.target.style.borderColor = '#ef4444'
      e.target.style.color = '#ef4444'
    }
  }
  const handlePointerLeave = (e) => {
    if (following || text === 'Siguiendo') {
      e.target.innerText = 'Siguiendo'
      e.target.style.backgroundColor = '#000'
      e.target.style.borderColor = '#fff'
      e.target.style.color = '#fff'
    } else {
      e.target.style.backgroundColor = '#fff'
      e.target.style.borderColor = '#fff'
      e.target.style.color = '#000'
    }
  }

  return (
    <article className='flex justify-between items-center py-3 px-4 bg-gray-950 transition-all duration-300 hover:bg-gray-900'>
      <header className='flex gap-3 items-center overflow-hidden'>
        <img className='w-10 h-10 rounded-full' src={`https://unavatar.io/${user}`} alt={`Imagen de perfil de ${user}`} />
        <div>
          <h4 className='font-bold text-lg leading-tight whitespace-nowrap'>{name}</h4>
          <p className='font-light text-sm leading-tight whitespace-nowrap'>@{user}</p>
        </div>
      </header>
      <aside>
        <button className={`py-2 px-4 font-medium rounded-full transition-all duration-30 whitespace-nowrap border ${styleButton}`} onClick={handleButton} onPointerEnter={handlePointerEnter} onPointerLeave={handlePointerLeave}>
          {text}
        </button>
      </aside>
    </article>
  )
}

export default CardTwitter
