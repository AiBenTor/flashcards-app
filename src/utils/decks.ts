import { Deck } from '@/types/deck'

export const getAllDecks = () => {
  return DECKS_TEST
}

const DECKS_TEST: Deck[] = [
  {
    id: '5b5ed59a-f2fa-4b3e-8018-001690439577',
    title: 'Verbs fdksalfñjdsalkfñjdksalfdjsaklfñdjaskfldsañjfkdalfñjdklañ',
    description: `fdafdsafdsa
  fdafdsafsafdsafdsa
  fdafdsafsafdsafdsa
  fdafdsafsafdsafdsa
  fdafdsafsafdsafdsa
  fdafdsafsafdsafdsa
  fdafdsafsafdsafdsa
  fdafdafdasfdas`,
    newCards: 2,
    learningCards: 3,
    scheduledCards: 2,
  },
  {
    id: 'c329900b-2bbc-41d7-89df-59f46a915e8b',
    title: 'Verbs',
    description: 'English Verbs',
    newCards: 2,
    learningCards: 3,
    scheduledCards: 2,
  },
  {
    id: '1ffad837-9186-43f8-83f4-b64fc15ded83',
    title: 'Colors',
    description: 'English Colors',
    newCards: 2,
    learningCards: 3,
    scheduledCards: 2,
  },
  {
    id: '35404da0-6647-42db-8fcf-b94b2d1948f2',
    title: 'Colors 2',
    description: 'English Colors 2',
    newCards: 2,
    learningCards: 3,
    scheduledCards: 2,
  },
  {
    id: '3b4d4e88-7330-44d1-901e-955c7ecc2f64',
    title: 'Colors 3',
    description: 'English Colors 3',
    newCards: 2,
    learningCards: 3,
    scheduledCards: 2,
  },
]
