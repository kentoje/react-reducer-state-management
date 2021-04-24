import React, { useContext, useState } from 'react'
import UserList from '../components/UserList'
import { Context } from '../context/usersContext'
import { useFilter } from '../hooks/filter/useFilter'

const Home = () => {
  const { state: users } = useContext(Context)
  const { state, dispatch, filterAction, populateAction } = useFilter(users)
  const [inputValue, setInputValue] = useState('')

  const onChange = ({ target: { value } }) => {
    setInputValue(value)
    dispatch(populateAction(users))
    dispatch(filterAction(value))
  }

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        placeholder="Filter users"
      />
      {
        users && <UserList users={state} />
      }
    </>
  )
}

export default Home;
