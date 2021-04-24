import React, { useContext } from 'react'
import UserList from '../components/UserList'
import { Context } from '../context/usersContext'

const Home = () => {
  const { state: users } = useContext(Context)

  return (
    <>
      {
        users && <UserList users={users} />
      }
    </>
  )
}

export default Home;
