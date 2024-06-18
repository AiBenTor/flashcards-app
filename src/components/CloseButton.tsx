import CloseIcon from '@mui/icons-material/Close'
import { useMobileMenu } from '@/hooks/useMobileMenu'
import { HeaderButton } from './HeaderButton'

export const CloseButton = () => {
  const { closeMenu } = useMobileMenu()

  return (
    <HeaderButton handleClick={closeMenu}>
      <CloseIcon />
    </HeaderButton>
  )
}
