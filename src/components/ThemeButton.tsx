import { DarkMode, LightMode } from '@mui/icons-material'
import { HeaderButton } from './HeaderButton'
import { useTheme } from '@/hooks/useTheme'

export const ThemeButton = () => {
  const { theme, setLightTheme, setDarkTheme } = useTheme()

  const handleClick = () => {
    if (theme === 'light') {
      setDarkTheme()
    } else {
      setLightTheme()
    }
  }

  return (
    <HeaderButton handleClick={handleClick}>
      { theme === 'light' ? <LightMode /> : <DarkMode />}
    </HeaderButton>
  )
}
