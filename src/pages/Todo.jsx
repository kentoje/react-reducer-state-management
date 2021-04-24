import React, { useState, useContext } from 'react'
import TodoList from '../components/TodoList'
import { v4 } from 'uuid'
import { Context } from '../hooks/todos/useTodo'

const Todo = () => {
  const { state, dispatch, createAction } = useContext(Context)
  const [inputValue, setInputValue] = useState('')

  return (
    <>
      <input type="text" value={inputValue} onChange={(event) => {
        setInputValue(event.target.value)
      }} />
      <button onClick={() => {
        dispatch(createAction({
          id: v4(),
          title: inputValue
        }))
      }}>
        Add Todo
      </button>
      {
        state ? <TodoList todos={state} /> : null
      }
    </>
  )
}

export default Todo
