import { configureStore } from '@reduxjs/toolkit'
import decksReducer from './decksSlice'
import themeReducer from './themeSlice'

export const store = configureStore({
  reducer: {
    decks: decksReducer,
    theme: themeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
