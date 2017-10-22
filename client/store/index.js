import { applyMiddleware, createStore } from 'redux'

import rootReducer from '../reducers'

const middleware = applyMiddleware()
const store = initialState => createStore(rootReducer, initialState, middleware)

export default store
