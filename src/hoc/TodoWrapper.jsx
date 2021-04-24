import React from 'react'
import { Provider } from '../hooks/todos/useTodo'
import { useParams } from 'react-router-dom'

const TodoWrapper = ({ children }) => {
  const { userId } = useParams()

  return (
    <Provider id={userId}>
      {children}
    </Provider>
  )
}

export default TodoWrapper
