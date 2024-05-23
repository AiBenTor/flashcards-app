import { Deck } from '@/components/Deck'
import { getAllDecks } from '@/utils/decks'
import '@/styles/decksPage.scss'

export const DecksPage = () => {
  return (
    <>
      <h1>DecksPage</h1>
      <div className='decks-container'>
        {getAllDecks().map((deck) => (
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
    </>
  )
}
