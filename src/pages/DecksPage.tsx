import { Deck } from '@/components/Deck'

export const DecksPage = () => {
  const id = crypto.randomUUID()
  const title = 'Verbs fdksalfñjdsalkfñjdksalfdjsaklfñdjaskfldsañjfkdalfñjdklañ'
  const description = `fdafdsafdsa
  fdafdsafsafdsafdsa
  fdafdsafsafdsafdsa
  fdafdsafsafdsafdsa
  fdafdsafsafdsafdsa
  fdafdsafsafdsafdsa
  fdafdsafsafdsafdsa
  fdafdafdasfdas`
  const newCards = 2
  const learningCards = 3
  const scheduledCards = 2

  return (
    <section>
      <h1>DecksPage</h1>
      <Deck
        id={id}
        title={title}
        description={description}
        newCards={newCards}
        learningCards={learningCards}
        scheduledCards={scheduledCards}
      />
    </section>
  )
}
