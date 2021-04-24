import { ENUM_ACTIONS } from './constants'

// Actions
const initAction = (data) => {
  return {
    type: ENUM_ACTIONS.initialize,
    payload: data,
  }
}
const createAction = (data) => {
  if (!data) return

  return {
    type: ENUM_ACTIONS.create,
    payload: data,
  }
}

// Data manipulation
const init = (data) => {
  return data
}
const create = (state, data) => [
  {
    id: data.id,
    title: data.title,
  },
  ...state,
]

const reducer = (state, action) => {
  switch (action.type) {
    case ENUM_ACTIONS.initialize:
      return init(action.payload)
    case ENUM_ACTIONS.create:
      return create(state, action.payload)
    default:
      return state
  }
}

export {
  reducer,
  initAction,
  createAction,
}
