import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({ todos, toggle }) => {
  return (
    <ul>
      {
        todos.map((todo) => (
          <TodoListItem
            todo={todo}
            toggle={toggle}
            key={todo.id}
          />
        ))
      }
    </ul>
  )
}

export default TodoList
