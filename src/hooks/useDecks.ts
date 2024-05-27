import { addDeck } from '@/store/decksSlice'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { Deck as DeckType } from '@/types/deck'

export const useDecks = () => {
  const decks = useAppSelector((state) => state.decks)
  const dispatch = useAppDispatch()

  const addNewDeck = (newDeck: DeckType) => {
    // setDecks([ ...decks, newDeck ])
    dispatch(addDeck(newDeck))
  }

  return {
    decks,
    addNewDeck
  }
}
