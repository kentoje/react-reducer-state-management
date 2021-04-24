import React, { useState, useContext } from 'react'
import TodoList from '../components/TodoList'
import { v4 } from 'uuid'
import { Context } from '../hooks/todos/useTodo'

const Todo = () => {
  const { state: todos, dispatch, createAction, toggleAction } = useContext(Context)
  const [inputValue, setInputValue] = useState('')

  const toggle = (id) => {
    dispatch(toggleAction({ id }))
  }

  const submit = () => {
    dispatch(createAction({
      id: v4(),
      title: inputValue,
      completed: false,
    }))
  }

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value)
        }}
      />
      <button onClick={() => {
        submit()
      }}>
        Add Todo
      </button>
      {
        todos && (
          <TodoList
            todos={todos}
            toggle={toggle}
          />
        )
      }
    </>
  )
}

export default Todo
