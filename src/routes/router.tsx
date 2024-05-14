import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '@/pages/HomePage'
import { DecksPage } from '@/pages/DecksPage'
import { PageLayout } from '@/layouts/PageLayout'

export const router = createBrowserRouter([
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
    ],
  },
])
