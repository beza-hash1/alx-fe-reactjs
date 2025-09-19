import React from 'react'
import Search from './Search'

export default function Home() {
  return (
    <div>
      <h1>GitHub User Search</h1>
      <p style={{ color: '#666' }}>Search for a GitHub username and view basic info.</p>

      <Search />
    </div>
  )
}
