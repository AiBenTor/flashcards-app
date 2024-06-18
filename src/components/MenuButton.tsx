import MenuIcon from '@mui/icons-material/Menu'
import { useMobileMenu } from '@/hooks/useMobileMenu'
import { HeaderButton } from './HeaderButton'

export const MenuButton = () => {
  const { openMenu } = useMobileMenu()

  return (
    <HeaderButton handleClick={openMenu}>
      <MenuIcon />
    </HeaderButton>
  )
}
