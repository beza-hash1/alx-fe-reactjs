import React from 'react'
import UserCard from './UserCard'

export default function UsersList({ users }) {
  if (!users || users.length === 0) return <p>No users to show</p>

  return (
    <div className="users-grid" aria-live="polite">
      {users.map(user => <UserCard key={user.id} user={user} />)}
    </div>
  )
}
