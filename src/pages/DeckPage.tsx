import { DeckLoader } from '@/routes/deck'
import { useLoaderData } from 'react-router-dom'

export const DeckPage = () => {
  const { deckId } = useLoaderData() as DeckLoader

  return (
    <section>
      <h1>DeckPage</h1>
      <p>{deckId}</p>
    </section>
  )
}
