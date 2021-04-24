import { ENUM_ACTIONS } from './constants'

const initAction = (data) => ({
  type: ENUM_ACTIONS.initialize,
  payload: data,
})
const createAction = (data) => {
  if (!data) return

  return {
    type: ENUM_ACTIONS.create,
    payload: data,
  }
}
const toggleAction = (data) => ({
  type: ENUM_ACTIONS.toggle,
  payload: data,
})

const init = (data) => data
const create = (state, data) => [
  {
    id: data.id,
    title: data.title,
  },
  ...state,
]
const toggle = (state, data) => (
  state.map((todo) => (
    todo.id === data.id
      ? { ...todo, completed: !todo.completed }
      : todo
  ))
)

const reducer = (state, action) => {
  switch (action.type) {
    case ENUM_ACTIONS.initialize:
      return init(action.payload)
    case ENUM_ACTIONS.create:
      return create(state, action.payload)
    case ENUM_ACTIONS.toggle:
      return toggle(state, action.payload)
    default:
      return state
  }
}

export {
  reducer,
  initAction,
  createAction,
  toggleAction,
}
