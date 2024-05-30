import { useDecks } from '@/hooks/useDecks'
import { DecksPage } from '@/pages/DecksPage'
import { store } from '@/store/store'
import { getAllDecks } from '@/utils/decks'
import { act, fireEvent, render, renderHook, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { beforeEach, describe, expect, test } from 'vitest'

describe('DecksPage', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <DecksPage />
        </BrowserRouter>
      </Provider>,
    )
  })

  test('should render', () => {
    expect(true).toBeTruthy()
  })

  test('should show all user init decks', () => {
    const userDecks = getAllDecks()

    expect(screen.getAllByRole('deckContainer').length).toBe(userDecks.length)
  })

  test('should show all decks after add new Deck', () => {
    const userDecks = getAllDecks()
    const addButton = screen.getByLabelText('add')

    fireEvent.click(addButton)

    expect(screen.getAllByRole('deckContainer').length).toBe(userDecks.length + 1)
  })

  test('should show all decks after delete a Deck', () => {
    const userDecks = getAllDecks()
    const wrapper = ({ children }: { children: React.ReactNode }) => {
      return <Provider store={store}>{children}</Provider>
    }
    const { result } = renderHook(() => useDecks(), { wrapper })
    const idDeck = userDecks[ 0 ].id

    act(() => {
      result.current.deleteDeck(idDeck)
    })

    expect(screen.getAllByRole('deckContainer').length).toBe(userDecks.length)
  })
})
