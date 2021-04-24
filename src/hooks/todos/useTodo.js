import { useEffect, useReducer } from 'react'
import { reducer, createAction, initAction, toggleAction } from './reducer'
import { useParams } from 'react-router-dom'

const useTodo = () => {
  const [state, dispatch] = useReducer(reducer, [])
  const { userId } = useParams()

  useEffect(() => {
    ;(async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      const data = await res.json()

      dispatch(initAction(data))
    })()
  }, [userId])

  return {
    state,
    dispatch,
    createAction,
    toggleAction,
  }
}

export {
  useTodo,
}
