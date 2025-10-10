import React from 'react'
import Search from './components/Search'

export default function App() {
  return (
    <div className="min-h-screen p-4">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
        GitHub User Search
      </h1>
      <Search />
    </div>
  )
}
