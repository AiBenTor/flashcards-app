import { configureStore } from '@reduxjs/toolkit'
import decksReducer from './decksSlice'
import mobileMenuReducer from './mobileMenuSlice'
import themeReducer from './themeSlice'

export const store = configureStore({
  reducer: {
    decks: decksReducer,
    mobileMenu: mobileMenuReducer,
    theme: themeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
