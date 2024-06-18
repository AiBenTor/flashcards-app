import { DarkMode, LightMode } from '@mui/icons-material'
import { useTheme } from '@/hooks/useTheme'
import { HeaderButton } from './HeaderButton'

export const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <HeaderButton handleClick={toggleTheme}>
      {theme === 'light' ? <DarkMode /> : <LightMode />}
    </HeaderButton>
  )
}
