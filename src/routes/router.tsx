import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'
import { DecksPage } from '@/pages/DecksPage'
import { PageLayout } from '@/layouts/PageLayout'
import { DeckPage } from '@/pages/DeckPage'
import { loader as deckLoader } from './deck'

export const routesConfig = [
  {
    path: '/',
    element: <PageLayout />,
    errorElement: <PageLayout isError={true} />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/decks',
        element: <DecksPage />,
      },
      {
        path: '/decks/:deckId',
        element: <DeckPage />,
        loader: deckLoader,
      },
    ],
  },
]

export const router = createBrowserRouter(routesConfig)
