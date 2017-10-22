import { GET_INVENTORY } from '../actions/actionTypes'

const initialState = []

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INVENTORY:
      return action.payload
    default:
      return state
  }
}

export default inventoryReducer
