import { useEffect, useRef, useState } from 'react'
import { fetchUsers } from '../utils/fetchUsers'

export function useUsers () {
  const [users, setUsers] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const initialUsers = useRef({})

  const getUsers = async () => {
    setLoading(true)
    const result = await fetchUsers()
    if (result.message) {
      setError(true)
    } else {
      setError(false)
    }
    setLoading(false)
    setUsers(result)
    initialUsers.current = result
  }

  useEffect(() => {
    getUsers()
  }, [])

  return { initialUsers, users, setUsers, getUsers, loading, error }
}
