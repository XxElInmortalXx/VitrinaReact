import { useMemo, useState } from 'react'
import { UsersList } from './components/UsersList'
import { useUsers } from './hooks/useUsers'
import { SortBy } from './utils'

export function App () {
  const [switchBackground, setSwitchBackground] = useState(true)
  const [sorting, setSorting] = useState(SortBy.NONE)
  const [filterCountry, setFilterCountry] = useState('')
  const { initialUsers, users, setUsers, error, loading } = useUsers()

  const handleSwitchBackground = () => {
    setSwitchBackground(prevState => !prevState)
  }

  const handleSwitchSortByCountry = () => {
    const newSortingValue = sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE
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

  const handleChangeSort = (sort) => {
    const newSorting = sorting === SortBy.NONE ? sort : SortBy.NONE
    setSorting(newSorting)
  }

  const filteredUsers = useMemo(() => {
    return filterCountry.length > 0
      ? users.filter(user => {
        return user.location.country.toLowerCase().includes(filterCountry.toLowerCase())
      })
      : users
  }, [users, filterCountry])

  const sortedUsers = useMemo(() => {
    if (sorting === SortBy.NONE) return filteredUsers

    const compareProperties = {
      [SortBy.COUNTRY]: user => user.location.country,
      [SortBy.NAME]: user => user.name.first,
      [SortBy.LAST]: user => user.name.last
    }

    return filteredUsers.toSorted((a, b) => {
      const extractProperty = compareProperties[sorting]
      return extractProperty(a).localeCompare(extractProperty(b))
    })
  }, [filteredUsers, sorting])

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
        {loading && <p>Cargando...</p>}
        {!loading && error && <p>{users.message}</p>}
        {!loading && !error && Object.keys(users).length > 0 && (
          <UsersList handleChangeSort={handleChangeSort} handleDeleteUser={handleDeleteUser} switchBackground={switchBackground} users={sortedUsers} />
        )}
        {!loading && !error && Object.keys(users).length === 0 && <p>No hay usuarios</p>}
      </section>
    </main>
  )
}
