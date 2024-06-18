import { ReactNode } from 'react'
import { Button, styled } from '@mui/material'
import { COLOR } from '@/utils/consts'
import { useTheme } from '@/hooks/useTheme'

interface Props {
  children?: ReactNode
  text?: string
  handleClick?: () => void
}

export const HeaderButton: React.FC<Props> = ({ children, text = '', handleClick }) => {
  const { theme } = useTheme()
  const CustomButton = styled(Button)({
    color: theme === 'light' ? COLOR.BLACK : COLOR.BLUE_LIGHT,
    '&:hover': {
      backgroundColor: theme === 'light' ? COLOR.BLUE_DARK : COLOR.GRAY_DARK,
    },
  })

  return <CustomButton onClick={handleClick}>{children || text}</CustomButton>
}
