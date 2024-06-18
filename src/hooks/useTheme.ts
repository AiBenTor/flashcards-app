import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setDark, setLight } from '@/store/themeSlice'
import { setLightTheme as setLightUtil, setDarkTheme as setDarkUtil } from '@/utils/theme'

export const useTheme = () => {
  const { value: theme } = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()

  const setLightTheme = () => {
    dispatch(setLight())
    setLightUtil()
  }

  const setDarkTheme = () => {
    dispatch(setDark())
    setDarkUtil()
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
