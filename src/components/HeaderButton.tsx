import { ReactNode } from 'react'
import { Button, styled } from '@mui/material'
import { COLOR } from '@/utils/consts'

interface Props {
  children?: ReactNode
  text?: string
  handleClick?: () => void
}

export const HeaderButton: React.FC<Props> = ({ children, text = '', handleClick }) => {
  const CustomButton = styled(Button)({
    color: COLOR.BLACK,
    '&:hover': {
      backgroundColor: COLOR.BLUE_DARK,
    },
  })

  return <CustomButton onClick={handleClick}>{children || text}</CustomButton>
}
