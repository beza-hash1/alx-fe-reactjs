import React, { useState } from 'react'
import { fetchUserData } from '../services/githubService'


export default function Search() {
  const [text, setText] = useState('')
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function submit(e) {
    e.preventDefault()
    setError(null)
    setUser(null)

    const username = text.trim()
    if (!username) {
      setError('Please enter a username')
      return
    }

    setLoading(true)
    try {
      const data = await fetchUserData(username)
      setUser(data)
    } catch (err) {
      setError('Looks like we cant find the user')
    } finally {
      setLoading(false)
    }
  }

  function clearAll() {
    setText('')
    setUser(null)
    setError(null)
  }

  return (
    <div>
      <form onSubmit={submit} className="search-form" role="search" aria-label="Search GitHub user">
        <input
          type="search"
          placeholder="Enter GitHub username (e.g. octocat)"
          value={text}
          onChange={(e) => setText(e.target.value)}
          aria-label="GitHub username"
        />
        <button type="submit">Search</button>
        <button type="button" onClick={clearAll}>Clear</button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p className="error">{error}</p>}

      {user && (
        <div className="user-card" style={{ marginTop: 12 }}>
          <img src={user.avatar_url} alt={`${user.login} avatar`} width="100" />
          <h3>{user.name ? user.name : user.login}</h3>
          {user.bio && <p>{user.bio}</p>}
          <p>
            <a href={user.html_url} target="_blank" rel="noopener noreferrer">View Profile on GitHub</a>
          </p>
        </div>
      )}
    </div>
  )
}
