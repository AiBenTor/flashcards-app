import { Deck } from '@/components/Deck'
import { getAllDecks } from '@/utils/decks'
import '@/styles/decksPage.scss'
import { Fab } from '@mui/material'
import { Add } from '@mui/icons-material'
import { useState } from 'react'
import { Deck as DeckType } from '@/types/deck'

export const DecksPage = () => {
  const [ decks, setDecks ] = useState(getAllDecks())

  const addDeck = () => {
    const newDeck: DeckType = {
      id: crypto.randomUUID(),
      title: 'New Deck',
      description: 'English Deck Created',
      newCards: 2,
      learningCards: 3,
      scheduledCards: 2,
    }

    setDecks([ ...decks, newDeck ])
  }

  return (
    <>
      <h1>DecksPage</h1>
      <div className="decks-container">
        {decks.map((deck) => (
          <Deck
            key={deck.id}
            id={deck.id}
            title={deck.title}
            description={deck.description}
            newCards={deck.newCards}
            learningCards={deck.learningCards}
            scheduledCards={deck.scheduledCards}
          />
        ))}
      </div>
      <Fab color="primary" aria-label="add" sx={{ position: 'fixed', right: '7%', bottom: '10%' }} onClick={addDeck}>
        <Add />
      </Fab>
    </>
  )
}
