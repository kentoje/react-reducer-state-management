import { useReducer, useEffect } from 'react'
import { reducer, filterAction, populateAction } from './reducer'

const useFilter = (data) => {
  const [state, dispatch] = useReducer(reducer, [])

  useEffect(() => {
    dispatch(populateAction(data))
  }, [data])

  return {
    state,
    dispatch,
    filterAction,
    populateAction,
  }
}

export {
  useFilter,
}
