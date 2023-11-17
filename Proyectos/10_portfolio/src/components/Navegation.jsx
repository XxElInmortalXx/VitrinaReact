export function Navegation () {
  return (
    <nav
      className='fixed bottom-5 w-60 sm:w-80 container left-1/2 -translate-x-1/2 bg-indigo-400 dark:bg-indigo-100 p-3 rounded-full'
    >
      <ul className='flex justify-evenly gap-2 w-full text-indigo-100 dark:text-indigo-950'>
        <li className='leading-none'>
          <i class='ri-home-line leading-none text-lg sm:text-2xl p-2 bg-indigo-950 dark:bg-indigo-400 bg-opacity-50 dark:bg-opacity-50 hover:bg-indigo-900 hover:bg-opacity-50 rounded-full transition-all duration-[400] cursor-pointer' />
        </li>
        <li className='leading-none'>
          <i class='ri-user-line leading-none text-lg sm:text-2xl p-2 rounded-full' />
        </li>
        <li className='leading-none'>
          <i class='ri-folder-user-line leading-none text-lg sm:text-2xl p-2 rounded-full' />
        </li>
        <li className='leading-none'>
          <i class='ri-suitcase-line leading-none text-lg sm:text-2xl p-2 rounded-full' />
        </li>
        <li className='leading-none'>
          <i class='ri-mail-line leading-none text-lg sm:text-2xl p-2 rounded-full' />
        </li>
      </ul>
    </nav>
  )
}
