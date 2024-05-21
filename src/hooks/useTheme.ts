import { useEffect, useState } from 'react'

export const useTheme = () => {
  const [ theme, setTheme ] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme') !== null) {
      if (localStorage.getItem('theme') === 'light') {
        setLightTheme()
      } else {
        setDarkTheme()
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkTheme()
    }
  }, [])

  const setLightTheme = () => {
    const lightTheme = 'light'
    setTheme(lightTheme)
    localStorage.setItem('theme', lightTheme)
    document.getElementById('app')?.classList.remove('dark')
  }

  const setDarkTheme = () => {
    const darkTheme = 'dark'
    setTheme(darkTheme)
    localStorage.setItem('theme', darkTheme)
    document.getElementById('app')?.classList.add('dark')
  }

  return {
    theme,
    setLightTheme,
    setDarkTheme,
  }
}
