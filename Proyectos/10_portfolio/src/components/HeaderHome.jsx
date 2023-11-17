import { useRef, useState } from 'react'

export function HeaderHome () {
  const [toggleDarkMode, setToggleDarkMode] = useState(false)
  const html = useRef(document.querySelector('html'))

  const handleDarkMode = () => {
    setToggleDarkMode(prevContent => !prevContent)
    html.current.classList.toggle('dark')
  }
  return (
    <div className='h-screen w-full flex flex-col justify-between'>
      <header className='container w-[90%] mx-auto flex justify-between items-center my-5 text-indigo-950 dark:text-indigo-50'>
        <h1 className='font-semibold text-xl'>Andres Eduardo</h1>
        <button onClick={handleDarkMode}>
          {
            toggleDarkMode
              ? <i class='ri-contrast-2-line text-3xl' />
              : <i class='ri-contrast-2-line text-3xl' />
          }
        </button>
      </header>

      <section className='mx-auto container w-[90%] text-center py-10 text-indigo-950 dark:text-indigo-50'>
        <span className='font-medium'>Hello, I am</span>
        <h2 className='text-4xl font-bold leading-snug'>Andres Eduardo</h2>
        <h3>Frontend Developer</h3>
        <a
          href='./src/assets/CV_Andres Eduardo.docx'
          download='CV_Andres Eduardo.docx'
          className='inline-block mt-2 py-2 px-8 border-2 border-indigo-400 hover:bg-indigo-400 rounded-lg transition-all duration-[400]'
        > Download CV
        </a>
      </section>

      <section className='w-[90%] mx-auto container flex justify-between items-start pb-5 text-indigo-950 dark:text-indigo-50'>
        <div className='flex flex-col'>
          <a href='#' className='hover:-translate-y-0.5 transition-all duration-[400]'>
            <i class='ri-linkedin-box-fill text-4xl' />
          </a>
          <a href='#' className='hover:-translate-y-0.5 transition-all duration-[400]'>
            <i class='ri-github-fill text-4xl' />
          </a>
        </div>
        <div className='hidden md:w-80 md:h-52 bg-indigo-500' />
        <div className='flex flex-col justify-center items-center'>
          <i class='ri-robot-fill text-4xl' />
          <div className='w-1 h-10 bg-indigo-950 dark:bg-indigo-50 rounded-full' />
        </div>
      </section>
    </div>
  )
}
