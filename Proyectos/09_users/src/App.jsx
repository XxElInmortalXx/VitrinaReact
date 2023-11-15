import { useMemo, useState } from 'react'
import { UsersList } from './components/UsersList'
import { useUsers } from './hooks/useUsers'

const SORTBY = {
  NONE: null,
  NAME: 'name',
  LAST: 'last',
  COUNTRY: 'country'
}

export function App () {
  const [switchBackground, setSwitchBackground] = useState(true)
  const [sorting, setSorting] = useState(SORTBY.NONE)
  const [filterCountry, setFilterCountry] = useState('')
  const { initialUsers, users, setUsers } = useUsers()

  const handleSwitchBackground = () => {
    setSwitchBackground(prevState => !prevState)
  }

  const handleSwitchSortByCountry = () => {
    const newSortingValue = sorting === SORTBY.NONE ? SORTBY.COUNTRY : SORTBY.NONE
    setSorting(newSortingValue)
  }

  const handleResetUsers = () => {
    setUsers(initialUsers.current)
  }

  const handleDeleteUser = (email) => {
    const filteresUsers = users.filter(user => user.email !== email)
    setUsers(filteresUsers)
  }

  const handleChangeCountry = (e) => {
    const value = e.target.value
    setFilterCountry(value)
  }

  const filteredCountry = useMemo(() => {
    return filterCountry.length > 0
      ? users.filter(user => {
        return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
      })
      : users
  }, [users, filterCountry])

  const sortedCountry = useMemo(() => {
    return sorting
      ? filteredCountry.toSorted((a, b) => {
        return a.location.country.localeCompare(b.location.counrty)
      })
      : filteredCountry
  }, [filteredCountry, sorting])

  return (
    <main>
      <header className=''>
        <h1 className='mt-5 text-4xl font-bold text-center'>List of Users</h1>
        <section className='flex flex-col md:flex-row justify-center gap-5 my-5'>
          <button
            className='py-1 px-4 bg-black text-white font-medium rounded-md'
            onClick={handleSwitchBackground}
          >
            Change Background
          </button>
          <button
            className='py-1 px-4 bg-black text-white font-medium rounded-md'
            onClick={handleSwitchSortByCountry}
          >
            Order by Country
          </button>
          <button
            className='py-1 px-4 bg-black text-white font-medium rounded-md'
            onClick={handleResetUsers}
          >
            Reset State
          </button>
          <input
            className='border-2 border-black rounded-md p-1'
            type='text'
            placeholder='Filter Country'
            onChange={handleChangeCountry}
          />
        </section>
      </header>
      <section className='w-[90%] mx-auto container'>
        <UsersList handleDeleteUser={handleDeleteUser} switchBackground={switchBackground} users={sortedCountry} />
      </section>
    </main>
  )
}
