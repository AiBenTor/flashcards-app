import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setDark, setLight } from '@/store/themeSlice'

export const useTheme = () => {
  const { value: theme } = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()

  const setLightTheme = () => {
    const lightTheme = 'light'
    dispatch(setLight())
    localStorage.setItem('theme', lightTheme)

    // Change Styles
    document.getElementById('app')?.classList.remove('dark')
    document.body.classList.remove('dark')
  }

  const setDarkTheme = () => {
    const darkTheme = 'dark'
    dispatch(setDark())
    localStorage.setItem('theme', darkTheme)

    // Change Styles
    document.getElementById('app')?.classList.add('dark')
    document.body.classList.add('dark')
  }

  const toggleTheme = () => {
    if (theme === 'light') {
      setDarkTheme()
    } else {
      setLightTheme()
    }
  }

  return {
    theme,
    toggleTheme,
  }
}
