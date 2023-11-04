import ButtonCardTwitter from './ButtonCardTwitter'

function CardTwitter ({ initialIsFollowing, name, user }) {
  return (
    <article className='flex justify-between items-center py-3 px-4 bg-[#16181C] transition-all duration-300 hover:bg-[#1D1F23]'>
      <header className='flex gap-3 items-center overflow-hidden'>
        <img className='w-10 h-10 rounded-full' src={`https://unavatar.io/${user}`} alt={`Imagen de perfil de ${user}`} />
        <div>
          <h4 className='font-bold text-lg leading-tight whitespace-nowrap'>{name}</h4>
          <p className='font-light text-sm leading-tight whitespace-nowrap'>@{user}</p>
        </div>
      </header>
      <aside>
        <ButtonCardTwitter initialIsFollowing={initialIsFollowing} />
      </aside>
    </article>
  )
}

export default CardTwitter
