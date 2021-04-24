import React from 'react'
import { useParams } from 'react-router-dom'

const Todo = () => {
  const { userId } = useParams()

  return (
    <div>Todo! {userId}</div>
  )
}

export default Todo
