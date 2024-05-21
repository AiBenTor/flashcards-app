import { DarkMode, LightMode } from '@mui/icons-material'
import { HeaderButton } from './HeaderButton'

interface Props {
  theme?: 'light' | 'dark'
  handleClick: () => void
}

export const ThemeButton: React.FC<Props> = ({ theme = 'light', handleClick }) => {
  return (
    <HeaderButton theme={theme} handleClick={handleClick}>
      {theme === 'light' ? <DarkMode /> : <LightMode />}
    </HeaderButton>
  )
}
