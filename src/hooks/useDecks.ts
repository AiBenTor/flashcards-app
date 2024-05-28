import { addDeck as addDeckSlice, deleteDeck as deleteDeckSlice } from '@/store/decksSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { Deck as DeckType } from '@/types/deck'

export const useDecks = () => {
  const decks = useAppSelector((state) => state.decks)
  const dispatch = useAppDispatch()

  const addDeck = (newDeck: DeckType) => {
    dispatch(addDeckSlice(newDeck))
  }

  const deleteDeck = (idDeck: DeckType['id']) => {
    dispatch(deleteDeckSlice(idDeck))
  }

  return {
    decks,
    addDeck,
    deleteDeck,
  }
}
