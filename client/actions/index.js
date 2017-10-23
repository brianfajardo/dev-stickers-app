import { GET_INVENTORY, ADD_TO_CART } from './actionTypes'

// Development seed data to flow through reducers and rendered by React
import seedData from './seedData'

export const fetchInventory = () => ({ type: GET_INVENTORY, payload: seedData })

export const addToCart = (item) => {
  const addedItem = {
    id: item.id,
    product: item.product,
    price: item.price,
    quantity: 1,
  }
  return { type: ADD_TO_CART, payload: addedItem }
}
