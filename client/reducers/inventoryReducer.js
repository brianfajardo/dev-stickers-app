import { GET_INVENTORY, ADD_TO_CART } from '../actions/actionTypes'

const initialState = []

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INVENTORY:
      return action.payload
    case ADD_TO_CART:
      return state.map(product =>
        (product.id === action.payload.id
          ? { ...product, stock: product.stock - action.payload.quantity }
          : product))
    default:
      return state
  }
}

export default inventoryReducer
