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
    deleteDeck: (state, { payload }: { payload: Deck['id'] }) => {
      const deckToDelete = state.find((deck) => deck.id === payload)

      if (deckToDelete !== undefined) {
        state.splice(state.indexOf(deckToDelete), 1)
      }
    },
  },
})

export const { addDeck, deleteDeck } = decksSlice.actions

const decksReducer = decksSlice.reducer
export default decksReducer
