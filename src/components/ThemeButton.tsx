import DarkMode from '@mui/icons-material/DarkMode'
import LightMode from '@mui/icons-material/LightMode'
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
