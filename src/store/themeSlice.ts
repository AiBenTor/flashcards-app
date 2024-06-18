import { getTheme } from '@/utils/theme'
import { createSlice } from '@reduxjs/toolkit'

interface themeState {
  value: 'light' | 'dark'
}

const initialState: themeState = {
  value: getTheme(),
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setLight: (state) => {
      state.value = 'light'
    },
    setDark: (state) => {
      state.value = 'dark'
    },
  },
})

export const { setLight, setDark } = themeSlice.actions

const themeReducer = themeSlice.reducer
export default themeReducer
