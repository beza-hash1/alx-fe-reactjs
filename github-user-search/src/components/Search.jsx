import React, { useState } from 'react'

export default function Search({ onSearch }) {
  const [text, setText] = useState('')

  function submit(e) {
    e.preventDefault()
    onSearch(text.trim())
  }

  return (
    <form onSubmit={submit} className="search-form" role="search">
      <input
        type="search"
        placeholder="Search GitHub users (e.g. 'octocat')"
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="Search GitHub users"
      />
      <button type="submit">Search</button>
      <button type="button" onClick={() => { setText(''); onSearch(''); }}>Clear</button>
    </form>
  )
}
