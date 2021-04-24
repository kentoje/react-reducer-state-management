import React, { useEffect, useReducer, createContext } from 'react'
import { reducer, createAction, initAction, toggleAction } from './reducer'
import { useParams } from 'react-router-dom'

const Context = createContext()

const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, [])
  const { userId } = useParams()

  useEffect(() => {
    ;(async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
      const data = await res.json()

      dispatch(initAction(data))
    })()
  }, [userId])

  return (
    <Context.Provider value={{ state, dispatch, createAction, toggleAction }}>
      {props.children}
    </Context.Provider>
  )
}

export {
  Provider,
  Context,
}
