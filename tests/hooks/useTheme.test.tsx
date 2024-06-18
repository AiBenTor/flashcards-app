import { describe, expect, test } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { Provider } from 'react-redux'
import { useTheme } from '@/hooks/useTheme'
import { store } from '@/store/store'

describe('useTheme hook', () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>
  }

  test('should init with localStorage theme', () => {
    const currentTheme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
    const { result } = renderHook(() => useTheme(), { wrapper })

    expect(result.current.theme).toBe(currentTheme)
  })

  test('should set theme', () => {
    const currentTheme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
    const { result } = renderHook(() => useTheme(), { wrapper })

    act(() => result.current.toggleTheme())

    expect(result.current.theme).not.toBe(currentTheme)

    act(() => result.current.toggleTheme())

    expect(localStorage.getItem('theme')).toBe(currentTheme)
  })
})
