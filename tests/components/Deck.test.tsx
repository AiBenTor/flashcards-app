import { beforeEach, describe, expect, test } from 'vitest'
import { fireEvent, render, renderHook, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Deck } from '@/components/Deck'
import { Deck as DeckType } from '@/types/deck'
import { getCurrentPath } from '@/utils/utils'
import { useDecks } from '@/hooks/useDecks'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

describe('Deck component', () => {
  const deckTest: DeckType = {
    id: '2ff52616-5c59-42e1-88ee-16050013f5c7',
    title: 'Test Deck',
    description: 'Description Deck',
    newCards: 20,
    learningCards: 8,
    scheduledCards: 10,
  }
  const wrapper = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>
  }

  beforeEach(() => {
    const { result } = renderHook(() => useDecks(), { wrapper })
    const handleDeleteDeckTest = (idDeck: DeckType['id']) => {
      result.current.deleteDeck(idDeck)
    }
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Deck deck={deckTest} handleDeleteDeck={handleDeleteDeckTest} />
        </BrowserRouter>
      </Provider>,
    )
  })

  test('should render', () => {
    expect(true).toBeTruthy()
  })

  test('should show deck title', () => {
    expect(screen.getByText(deckTest.title)).toBeTruthy()
  })

  test('should show deck description', () => {
    expect(screen.getByText(deckTest.description)).toBeTruthy()
  })

  test('should show deck cards types number', () => {
    const typeCards = `${deckTest.newCards} | ${deckTest.learningCards} | ${deckTest.scheduledCards}`

    expect(screen.getByText(typeCards)).toBeTruthy()
  })

  test('should navigate to deck page', () => {
    const linkDeckPage = screen.getByText(deckTest.title)

    fireEvent.click(linkDeckPage)

    expect(getCurrentPath()).toBe(`/decks/${deckTest.id}`)
  })
})
