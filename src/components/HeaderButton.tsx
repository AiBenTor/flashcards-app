import { Link } from 'react-router-dom'
import { Button, styled } from '@mui/material'
import { COLOR } from '@/utils/consts'

interface Props {
  text: string
  url: string
}

export const HeaderButton: React.FC<Props> = ({ text, url }) => {
  const CustomButton = styled(Button)({
    color: COLOR.BLACK,
    '&:hover': {
      backgroundColor: COLOR.BLUE_DARK,
    },
  })

  return (
    <Link to={url}>
      <CustomButton>{text}</CustomButton>
    </Link>
  )
}
