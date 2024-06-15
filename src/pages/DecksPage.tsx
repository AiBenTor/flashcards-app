import { Deck } from '@/components/Deck'
import { Fab } from '@mui/material'
import { Add } from '@mui/icons-material'
import { Deck as DeckType } from '@/types/deck'
import { useDecks } from '@/hooks/useDecks'
import '@/styles/decksPage.scss'

export const DecksPage = () => {
  const { decks, addDeck, deleteDeck } = useDecks()

  const handleAddDeck = () => {
    const newDeck: DeckType = {
      id: crypto.randomUUID(),
      title: 'New Deck',
      description: 'English Deck Created',
      newCards: 2,
      learningCards: 3,
      scheduledCards: 2,
    }

    addDeck(newDeck)
  }

  const handleDeleteDeck = (idDeck: DeckType['id']) => {
    deleteDeck(idDeck)
  }

  return (
    <>
      <h1>DecksPage</h1>
      <ul className="decks-container">
        {decks.map((deck) => (
          <li key={deck.id} role="deckContainer">
            <Deck deck={deck} handleDeleteDeck={handleDeleteDeck} />
          </li>
        ))}
      </ul>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', right: '7%', bottom: '10%' }}
        onClick={handleAddDeck}
      >
        <Add />
      </Fab>
    </>
  )
}
