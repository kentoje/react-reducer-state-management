import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TodoList from '../components/TodoList'
import { v4 } from 'uuid'

const Todo = () => {
  const { userId } = useParams()
  const [todos, setTodos] = useState(null)
  const [inputValue, setInputValue] = useState('')

  const intialTodo = {
    id: v4(),
  }

  const addTodo = (todo) => {
    setTodos([todo, ...todos])
  }

  useEffect(() => {
    ;(async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      const data = await res.json()

      setTodos(data)
    }) ()
  }, [userId])

  return (
    <>
      <input type="text" value={inputValue} onChange={(event) => {
        setInputValue(event.target.value)
      }} />
      <button onClick={() => {
        addTodo({ ...intialTodo, title: inputValue })
      }}>Add Todo</button>
      {
        todos ? <TodoList todos={todos} /> : null
      }
    </>
  )
}

export default Todo
