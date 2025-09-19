import React, { useState } from 'react'
import Search from './Search'
import UsersList from './UsersList'
import { searchUsers } from '../services/githubService'

export default function Home() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function handleSearch(query) {
    setError(null)
    if (!query) {
      setUsers([])
      return
    }
    setLoading(true)
    try {
      const items = await searchUsers(query, 12)
      setUsers(items)
    } catch (err) {
      setError(err.message || 'Error fetching users')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>GitHub User Search</h1>
      <p style={{ color: '#666' }}>Search GitHub users and open their profiles.</p>

      <Search onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      <UsersList users={users} />
    </div>
  )
}
