import thunk from 'redux-thunk'
import createRootReducer from '@store/rootReducer'
import { configureStore } from '@reduxjs/toolkit'

export function configureAppStore(initialState: {}) {
  const middleware = [thunk]

  return configureStore({
    reducer: createRootReducer(),
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middleware)
  })
}
