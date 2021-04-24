import React from 'react'
import { Link } from 'react-router-dom'

const UserListItem = ({ user }) => {
  return (
    <li>
      <Link to={`/todo/${user.id}`}>
        {user.name}
      </Link>
    </li>
  )
}

export default UserListItem
