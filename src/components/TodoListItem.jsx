import React from 'react'

const TodoListItem = ({ todo, toggle }) => {
  return (
    <li
      onClick={() => {
        toggle(todo.id)
      }}
      style={{ textDecoration: todo.completed && 'line-through' }}
    >
      {todo.title}
    </li>
  )
}

export default TodoListItem
