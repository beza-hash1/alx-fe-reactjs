import React, { useState } from 'react'
import { searchUsersAdvanced } from '../services/githubService'

export default function Search() {
  const [username, setUsername] = useState('')
  const [location, setLocation] = useState('')
  const [minRepos, setMinRepos] = useState(0)
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function submit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setUsers([])

    if (!username.trim()) {
      setError('Please enter a username')
      setLoading(false)
      return
    }

    try {
      const results = await searchUsersAdvanced({
        username,
        location,
        minRepos: Number(minRepos),
        per_page: 12,
      })

      if (results.length === 0) {
        setError('Looks like we cant find any users')
      } else {
        setUsers(results)
      }
    } catch (err) {
      setError(err.message || 'Looks like we cant find any users')
    } finally {
      setLoading(false)
    }
  }

  function clearAll() {
    setUsername('')
    setLocation('')
    setMinRepos(0)
    setUsers([])
    setError(null)
  }

  return (
    <div>
      <form onSubmit={submit} className="search-form" role="search">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          aria-label="Username"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          aria-label="Location"
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          aria-label="Minimum repositories"
          min="0"
        />
        <button type="submit">Search</button>
        <button type="button" onClick={clearAll}>Clear</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {users.length > 0 && (
        <div className="users-grid">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.avatar_url} alt={`${user.login} avatar`} width="100" />
              <h3>{user.login}</h3>
              <p>Type: {user.type}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
