import { useEffect, useState } from 'react'

export const useTheme = () => {
  const [ theme, setTheme ] = useState('light')

  useEffect(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme') !== null) {
      setTheme(localStorage.getItem('theme') as string)
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkTheme()
    }
  }, [])

  const setLightTheme = () => {
    const lightTheme = 'light'
    setTheme(lightTheme)
    localStorage.setItem('theme', lightTheme)
    document.documentElement.classList.remove('dark')
  }

  const setDarkTheme = () => {
    const darkTheme = 'dark'
    setTheme(darkTheme)
    localStorage.setItem('theme', darkTheme)
    document.documentElement.classList.add('dark')
  }

  return {
    theme,
    setLightTheme,
    setDarkTheme,
  }
}
