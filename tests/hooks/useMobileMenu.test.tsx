import { useMobileMenu } from '@/hooks/useMobileMenu'
import { store } from '@/store/store'
import { act, renderHook } from '@testing-library/react'
import { Provider } from 'react-redux'
import { describe, expect, test } from 'vitest'

describe('useMobileMenu hook', () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => {
    return <Provider store={store}>{children}</Provider>
  }

  test('should init with menu close', () => {
    const { result } = renderHook(() => useMobileMenu(), { wrapper })

    expect(result.current.isMenuOpen).toBeFalsy()
  })

  test('should open menu', () => {
    const { result } = renderHook(() => useMobileMenu(), { wrapper })

    act(() => result.current.openMenu())

    expect(result.current.isMenuOpen).toBeTruthy()
  })

  test('should close menu', () => {
    const { result } = renderHook(() => useMobileMenu(), { wrapper })

    act(() => result.current.openMenu())
    act(() => result.current.closeMenu())

    expect(result.current.isMenuOpen).toBeFalsy()
  })
})
