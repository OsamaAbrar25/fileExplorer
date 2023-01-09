import { configureStore } from '@reduxjs/toolkit'
// import markReducer from './markSlice'
import { convinApi } from '../services/convinApi'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
    reducer: {
        [convinApi.reducerPath]: convinApi.reducer,
        // mark: markReducer
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(convinApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)