import { createSlice } from '@reduxjs/toolkit'

interface mobileMenuState {
  value: boolean
}

const initialState: mobileMenuState = {
  value: false,
}

export const mobileMenuSlice = createSlice({
  name: 'mobileMenu',
  initialState,
  reducers: {
    open: (state) => {
      state.value = true
    },
    close: (state) => {
      state.value = false
    },
  },
})

export const { open, close } = mobileMenuSlice.actions

const mobileMenuReducer = mobileMenuSlice.reducer
export default mobileMenuReducer
