import { ENUM_ACTIONS } from './constants'

const populateAction = (data) => ({
  type: ENUM_ACTIONS.populate,
  payload: data,
})
const filterAction = (data) => ({
  type: ENUM_ACTIONS.filter,
  payload: data,
})

const populate = (data) => data
const filter = (state, filter) => (
  state.filter((el) => el.name.toLowerCase().includes(filter.toLowerCase()))
)


const reducer = (state, action) => {
  switch (action.type) {
    case ENUM_ACTIONS.populate:
      return populate(action.payload)
    case ENUM_ACTIONS.filter:
      return filter(state, action.payload)
    default:
      return state
  }
}

export {
  reducer,
  populateAction,
  filterAction,
}
