import { beforeEach, describe, expect, test } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'
import App from '@/App'
import { getCurrentPath } from '@/utils/utils'
import { routesConfig } from '@/routes/router'

describe('App routes', () => {
  beforeEach(() => {
    cleanup()
  })

  test('should render without problems', () => {
    render(<App />)

    expect(true).toBeTruthy()
  })

  test('should render home page', () => {
    render(<App />)

    expect(getCurrentPath()).toBe('/')
  })

  test('should render about page', () => {
    render(<App />)
    const linkButton = screen.getByText(/My Decks/)
    fireEvent.click(linkButton)

    expect(getCurrentPath()).toBe('/decks')
  })

  test('should render error page', async () => {
    const badRoute = '/fdklafjdklasf'
    const routerTest = createMemoryRouter(routesConfig, {
      initialEntries: [ badRoute ],
    })
    render(<RouterProvider router={routerTest} />)

    expect(screen.getByText(/Oops/)).toBeTruthy()
  })
})
