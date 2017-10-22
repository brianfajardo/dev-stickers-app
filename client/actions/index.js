import { GET_INVENTORY } from './actionTypes'

// Development seed data to flow through reducers and rendered by React
import seedData from './seedData'

export const fetchInventory = () => ({ type: GET_INVENTORY, payload: seedData })
