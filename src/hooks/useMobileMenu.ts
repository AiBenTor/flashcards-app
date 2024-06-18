import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { close, open } from '@/store/mobileMenuSlice'

export const useMobileMenu = () => {
  const { value: isMenuOpen } = useAppSelector((state) => state.mobileMenu)
  const dispatch = useAppDispatch()

  const openMenu = () => {
    dispatch(open())
  }

  const closeMenu = () => {
    dispatch(close())
  }

  return {
    isMenuOpen,
    openMenu,
    closeMenu,
  }
}
