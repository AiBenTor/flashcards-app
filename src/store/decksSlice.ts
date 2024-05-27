import { Deck } from '@/types/deck'
import { getAllDecks } from '@/utils/decks'
import { createSlice } from '@reduxjs/toolkit'

const initialState = getAllDecks()

export const decksSlice = createSlice({
  name: 'decks',
  initialState,
  reducers: {
    addDeck: (state, { payload }: { payload: Deck }) => {
      state.push(payload)
    },
  },
})

export const { addDeck } = decksSlice.actions

const decksReducer = decksSlice.reducer
export default decksReducer
