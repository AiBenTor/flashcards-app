import { describe, expect, test } from 'vitest'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { act, renderHook } from '@testing-library/react'
import { useDecks } from '@/hooks/useDecks'
import { getAllDecks } from '@/utils/decks'
import { Deck as DeckType } from '@/types/deck'

describe('useDeck hook', () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>
  }
  const deckTest: DeckType = {
    id: '2ff52616-5c59-42e1-88ee-16050013f5c7',
    title: 'Test Deck',
    description: 'Description Deck',
    newCards: 20,
    learningCards: 8,
    scheduledCards: 10,
  }

  test('should start with user decks', () => {
    const { result } = renderHook(() => useDecks(), { wrapper })
    const userDecks = getAllDecks()

    expect(result.current.decks).toBe(userDecks)
  })

  test('should add new Deck', () => {
    const { result } = renderHook(() => useDecks(), { wrapper })
    act(() => {
      result.current.addDeck(deckTest)
    })

    expect(result.current.decks.find((deck) => deck.id === deckTest.id)).not.toBeUndefined()
  })

  test('should delete Deck', () => {
    const { result } = renderHook(() => useDecks(), { wrapper })
    act(() => {
      result.current.deleteDeck(deckTest.id)
    })

    expect(result.current.decks.find((deck) => deck.id === deckTest.id)).toBeUndefined()
  })
})
