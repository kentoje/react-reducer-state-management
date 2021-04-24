import { useEffect, useReducer, createContext } from 'react'
import { reducer, initAction } from '../hooks/users/reducer'

const Context = createContext()

const Provider = (props) => {
  const [state, dispatch] = useReducer(reducer, [])
  useEffect(() => {
    ;(async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
      const data = await res.json()

      dispatch(initAction(data))
    })()
  }, [])

  return (
    <Context.Provider value={{ state }}>
      {props.children}
    </Context.Provider>
  )
}

export {
  Provider,
  Context
}
