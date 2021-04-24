import React, { useEffect, useReducer, createContext } from 'react'
import { reducer, createAction, initAction } from './reducer'

const Context = createContext()

const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, [])

  useEffect(() => {
    ;(async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${props.id}`)
      const data = await res.json()

      dispatch(initAction(data))
    })()
  }, [props.id])

  return (
    <Context.Provider value={{ state, createAction, dispatch }}>
      {props.children}
    </Context.Provider>
  )
}

export {
  Provider,
  Context,
}
