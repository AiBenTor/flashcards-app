import MenuIcon from '@mui/icons-material/Menu'
import { HeaderButton } from './HeaderButton'

interface Props {
  theme: 'light' | 'dark'
}

export const MenuButton: React.FC<Props> = ({ theme }) => {
  return (
    <HeaderButton theme={theme}>
      <MenuIcon />
    </HeaderButton>
  )
}
