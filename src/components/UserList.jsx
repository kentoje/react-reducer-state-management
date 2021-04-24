import React from 'react'
import UserListItem from './UserListItem'

const UserList = ({ users }) => {
  return (
    <ul>
      {
        users.map((user) => <UserListItem user={user} key={user.id} />)
      }
    </ul>
  )
}

export default UserList
