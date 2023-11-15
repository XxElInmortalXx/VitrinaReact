import { useEffect, useRef, useState } from 'react'
import { fetchUsers } from '../utils/fetchUsers'

export function useUsers () {
  const [users, setUsers] = useState({})
  const initialUsers = useRef({})

  const getUsers = async () => {
    const result = await fetchUsers()
    setUsers(result)
    initialUsers.current = result
  }

  useEffect(() => {
    getUsers()
  }, [])

  return { initialUsers, users, setUsers, getUsers }
}
