import { GET_INVENTORY } from './actionTypes'
import seedData from './seedData'

export const fetchInventory = () => ({ type: GET_INVENTORY, payload: seedData })
