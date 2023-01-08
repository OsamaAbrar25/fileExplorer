import { configureStore } from '@reduxjs/toolkit'
// import markReducer from './markSlice'
// import { explorerApi } from '../services/explorerApi'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
    reducer: {
        [explorerApi.reducerPath]: explorerApi.reducer,
        mark: markReducer
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(explorerApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)