import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <header className="header">
        <nav className="container">
          <Link to="/">Home</Link>
          <Link to="/about" style={{ marginLeft: 8 }}>About</Link>
        </nav>
      </header>

      <main className="container main">
        <Outlet />
      </main>

      <footer className="container footer">
        <small>Made with  — GitHub User Search</small>
      </footer>
    </>
  )
}
