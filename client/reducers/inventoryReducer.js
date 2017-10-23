import { GET_INVENTORY, ADD_TO_CART, REMOVE_FROM_CART } from '../actions/actionTypes'

const initialState = []

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INVENTORY:
      return action.payload
    case ADD_TO_CART:
      return state.map(product =>
        product.id === action.payload.id
          ? { ...product, stock: product.stock - 1 }
          : product
      )
    case REMOVE_FROM_CART:
    console.log('inventory remove from cart reducer fired')
      return state.map(product =>
        product.id === action.payload.id
          ? { ...product, stock: product.stock + 1 }
          : product
      )
    default:
      return state
  }
}

export default inventoryReducer
