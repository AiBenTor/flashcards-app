import { describe, expect, test } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useTheme } from '@/hooks/useTheme'

describe('useTheme testing', () => {
  test('should init with light theme', () => {
    localStorage.setItem('theme', 'light')
    const { result } = renderHook(useTheme)

    expect(result.current.theme).toBe('light')
  })

  test('should init with dark theme', () => {
    localStorage.setItem('theme', 'dark')
    const { result } = renderHook(useTheme)

    expect(result.current.theme).toBe('dark')
  })

  test('should set dark theme', () => {
    localStorage.setItem('theme', 'light')
    const { result } = renderHook(useTheme)

    act(() => result.current.setDarkTheme())

    expect(result.current.theme).toBe('dark')
  })

  test('should set light theme', () => {
    localStorage.setItem('theme', 'dark')
    const { result } = renderHook(useTheme)

    act(() => result.current.setLightTheme())

    expect(result.current.theme).toBe('light')
  })
})
