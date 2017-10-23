import { combineReducers } from 'redux'

import inventoryReducer from './inventoryReducer'
import userCartReducer from './userReducer'

const rootReducer = combineReducers({
  inventory: inventoryReducer,
  user: userCartReducer,
})

export default rootReducer
