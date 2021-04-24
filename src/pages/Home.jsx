import React, { useEffect, useState } from 'react'
import UserList from '../components/UserList'

const Home = () => {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    ;(async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()

      setUsers(data)
    }) ()
  }, [])

  return (
    <>
      {
        users && <UserList users={users} />
      }
    </>
  )
}

export default Home;
