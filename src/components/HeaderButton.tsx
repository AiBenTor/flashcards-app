import { Button, styled } from '@mui/material'
import palette from  '@/styles/palette.module.scss'

interface Props {
  text: string
  url: string
}

export const HeaderButton: React.FC<Props>  = ({ text, url }) => {
  const CustomButton = styled(Button)({
    color: 'white',
    '&:hover': {
      backgroundColor: palette.secondary
    }
  })

  return (
    <CustomButton href={url}>{text}</CustomButton>
  )
}
