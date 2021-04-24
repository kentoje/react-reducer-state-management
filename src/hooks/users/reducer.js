import { ENUM_ACTIONS } from './constants'

const initAction = (data) => ({
  type: ENUM_ACTIONS.initialize,
  payload: data,
})

const init = (data) => data

const reducer = (state, action) => {
  switch (action.type) {
    case ENUM_ACTIONS.initialize:
      return init(action.payload)
    default:
      return state
  }
}

export {
  reducer,
  initAction,
}
